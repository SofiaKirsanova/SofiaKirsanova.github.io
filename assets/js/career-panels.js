/* Publications / conferences controls. Runs after the published bibliography has loaded. */
(function($){
  $(function(){
    if(window.location.pathname.indexOf('/publications/')!==0){return;}

    var typeMap={
      trasa2026:['conference','Conference paper'],
      frieda2026:['conference','Conference paper'],
      digmapper:['conference','Conference paper'],
      geosearch2025:['workshop','Workshop paper'],
      haystac:['workshop','Workshop paper'],
      process_mining_lomonosov:['other','Proceedings'],
      process_mining_tikhonov:['other','Proceedings'],
      connect6:['other','Earlier work']
    };
    var presentationIds={
      geosearch2025_presentation:true,
      mngislis2025_presentation:true,
      bigten2025_presentation:true,
      frontiers2026:true
    };
    var pub=$('.publications').first();

    pub.find('ol.bibliography > li').each(function(){
      var entry=$(this);
      var item=entry.find('div[id].col-sm-8').first();
      var id=item.attr('id')||'';
      if(presentationIds[id]){entry.remove();return;}
      var cfg=typeMap[id]||['other','Research publication'];
      entry.attr('data-publication-type',cfg[0]);
      if(item.find('.career-kind').length===0){
        item.find('.periodical').first().before('<span class="career-kind career-kind-'+cfg[0]+'">'+cfg[1]+'</span>');
      }
    });

    function applyPubFilter(){
      var selected=$('[data-publication-filter].is-active').attr('data-publication-filter')||'all';
      pub.find('ol.bibliography').each(function(){
        var list=$(this);
        list.children('li').each(function(){
          var el=$(this),match=selected==='all'||el.attr('data-publication-type')===selected;
          el.toggleClass('career-filtered',!match);
        });
        var anyVisible=list.children('li').filter(function(){return !$(this).hasClass('career-filtered')&&!$(this).hasClass('unloaded');}).length>0;
        list.toggleClass('career-filtered',!anyVisible);
        list.prev('h2.bibliography').toggleClass('career-filtered',!anyVisible);
      });
    }
    function applyConfFilter(){
      var selected=$('[data-conference-filter].is-active').attr('data-conference-filter')||'all';
      $('.career-conference-card').each(function(){
        var entry=$(this);
        entry.prop('hidden',selected!=='all'&&entry.attr('data-conference-type')!==selected);
      });
    }
    $('.career-tab').on('click',function(){
      var tab=$(this).attr('data-career-tab');
      $('.career-tab').removeClass('is-active').attr('aria-selected','false');
      $(this).addClass('is-active').attr('aria-selected','true');
      $('#career-publications-pane').prop('hidden',tab!=='publications');
      $('#career-conferences-pane').prop('hidden',tab!=='conferences');
    });
    $('.career-tab').on('keydown',function(e){
      if(e.key!=='ArrowLeft'&&e.key!=='ArrowRight'){return;}
      e.preventDefault();
      var tabs=$('.career-tab');var n=tabs.index(this);
      tabs.eq((n+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length).trigger('click').trigger('focus');
    });
    $('[data-publication-filter]').on('click',function(){
      $('[data-publication-filter]').removeClass('is-active').attr('aria-pressed','false');
      $(this).addClass('is-active').attr('aria-pressed','true');
      applyPubFilter();
    });
    $('[data-conference-filter]').on('click',function(){
      $('[data-conference-filter]').removeClass('is-active').attr('aria-pressed','false');
      $(this).addClass('is-active').attr('aria-pressed','true');
      applyConfFilter();
    });
    $('#bibsearch').on('input',function(){window.setTimeout(applyPubFilter,350);});
    applyPubFilter();
    applyConfFilter();
  });
})(jQuery);

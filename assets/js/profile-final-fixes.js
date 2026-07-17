$(document).ready(function(){
  var path=window.location.pathname;

  if(!document.getElementById('profile-content-link-colors')){
    var style=document.createElement('style');
    style.id='profile-content-link-colors';
    style.textContent='.news td a,.cv h6 a,.cv .item a,.cv .post-description a:not(.btn),.publications .title a,article p a,article li a{color:#00a6d6!important}.publications .abbr .badge a,.publications .btn,.cv .btn,.navbar a{color:inherit!important}';
    document.head.appendChild(style);
  }

  if(path==='/'||path==='/index.html'){
    var row=$('.news table tr').filter(function(){return $(this).text().indexOf('Detecting Legend Items on Historical Maps Using GPT-4o with In-Context Learning')!==-1;}).first();
    if(row.length){
      row.find('td').html('Our paper <a href="https://doi.org/10.1145/3764920.3770590" target="_blank" rel="external nofollow noopener"><em>Detecting Legend Items on Historical Maps Using GPT-4o with In-Context Learning</em></a> was accepted to <a href="https://geosearch-workshop.github.io/geosearch2025/" target="_blank" rel="external nofollow noopener">GeoSearch@ACM SIGSPATIAL 2025</a>! I’ll be presenting this work at SIGSPATIAL in Minneapolis this November. See you there!');
    }
  }

  if(path.indexOf('/cv/')===0){
    var projectsCard=$('#projects').next('.card');
    projectsCard.find('.badge').each(function(){
      var badge=$(this),text=badge.text().trim();
      if(text.indexOf('Ongoing')!==-1){badge.attr('style','background-color:#d9a400!important;color:#1b1b1b!important;padding:.35rem .6rem!important');}
      if(text.indexOf('Completed')!==-1){badge.attr('style','background-color:#2e8b57!important;color:#fff!important;padding:.35rem .6rem!important');}
    });

    $('img[alt="DARPA logo"]').attr('style','width:58px;height:34px;object-fit:contain;filter:brightness(0) invert(1);background:#243b64;padding:5px 8px;border-radius:5px');

    var serviceLinks={
      'ACM SIGSPATIAL 2026 Applications Track':'https://sigspatial2026.sigspatial.org/applications-submission.html',
      'Computer Science Graduate Student Association, University of Minnesota':'https://cse.umn.edu/cs/computer-science-graduate-students-association-csgsa',
      'Spatial Women (SpatialW)':'https://spatialwomen.github.io/',
      'Data Science Poster Fair, University of Minnesota':'https://cse.umn.edu/datascience/events/spring-2025-data-science-poster-fair',
      'Nauchnyj Avangard High School Research Competition':'https://na-konferencii.ru/conference/vserossijskij-konkurs-nauchno-issledovatelskih-rabot-nauchnyj-avangard-2026'
    };
    var serviceCard=$('#service').next('.card');
    serviceCard.find('li.list-group-item').each(function(){
      var item=$(this);
      item.find('h6').not('.title').each(function(){
        var line=$(this),text=line.text().trim();
        if(serviceLinks[text]){line.html('<a href="'+serviceLinks[text]+'" target="_blank" rel="external nofollow noopener">'+text+'</a>');}
      });
    });

    var workLinks={
      'Rotec Digital Solutions':'https://prana-system.com/en/contacts/',
      'MOLNET':'https://company.molnet.ru/ru/about',
      'JetBrains Academy':'https://www.jetbrains.com/academy/'
    };
    var workCard=$('#work').next('.card');
    workCard.find('li.list-group-item').each(function(){
      var item=$(this);
      item.find('h6.title a').each(function(){$(this).replaceWith($(this).contents());});
      item.find('h6').not('.title').each(function(){
        var line=$(this),html=line.html();
        Object.keys(workLinks).forEach(function(name){
          if(line.text().indexOf(name)!==-1 && line.find('a').length===0){html=html.replace(name,'<a href="'+workLinks[name]+'" target="_blank" rel="external nofollow noopener">'+name+'</a>');}
        });
        line.html(html);
      });
    });
  }

  if(path.indexOf('/projects/imola/')===0||path.indexOf('/projects/criticalmaas/')===0){
    $('.badge').each(function(){
      var badge=$(this),text=badge.text().trim();
      if(text.indexOf('Ongoing')!==-1){badge.attr('style','background-color:#d9a400!important;color:#1b1b1b!important;padding:.35rem .6rem!important');}
      if(text.indexOf('Completed')!==-1){badge.attr('style','background-color:#2e8b57!important;color:#fff!important;padding:.35rem .6rem!important');}
    });
    $('img[alt="DARPA logo"]').attr('style','width:66px;height:36px;object-fit:contain;filter:brightness(0) invert(1);background:#243b64;padding:5px 8px;border-radius:5px');
  }

  if(path.indexOf('/publications/')===0){
    function badgeStyle(id,color,textColor){
      var badge=$('#'+id).closest('.row').find('.abbr abbr.badge').first();
      badge.attr('style','background-color:'+color+'!important;color:'+textColor+'!important');
      badge.find('a').attr('style','color:'+textColor+'!important');
    }
    badgeStyle('frieda2026','#0b3d91','#fff');
    ['digmapper','geosearch2025','geosearch2025_presentation','haystac'].forEach(function(id){badgeStyle(id,'#1565c0','#fff');});
    badgeStyle('bigten2025_presentation','#008c95','#fff');
    badgeStyle('frontiers2026','#b08d00','#1b1b1b');
    badgeStyle('mngislis2025_presentation','#43a047','#fff');
    badgeStyle('process_mining_lomonosov','#ef6c00','#fff');
    badgeStyle('process_mining_tikhonov','#ef6c00','#fff');
    badgeStyle('connect6','#c62828','#fff');
    badgeStyle('trasa2026','#6c757d','#fff');
  }
});
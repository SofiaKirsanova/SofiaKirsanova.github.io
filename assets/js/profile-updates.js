$(document).ready(function(){
  var path=window.location.pathname;
  var academicCvUrl='https://docs.google.com/document/d/1_PbEPhMcy_ImRT284Wbx4m0WldGxpSvreag2lodb7f0/edit?usp=sharing';
  var resumeUrl='/assets/pdf/CV_FAANG.pdf';
  var nsfUrl='https://www.nsf.gov/';
  var darpaUrl='https://www.darpa.mil/research/programs/critical-mineral-assessments-with-ai-support';

  function sponsorBadge(label,url,icon){
    return '<a class="badge badge-primary mr-2" href="'+url+'" target="_blank" rel="external nofollow noopener"><i class="'+icon+'"></i> '+label+'</a>';
  }
  function statusBadge(label,kind){
    return '<span class="badge badge-'+kind+'">'+label+'</span>';
  }
  function publicationItem(id,badge,badgeUrl,title,titleUrl,authors,venue,links){
    var badgeHtml=badgeUrl?'<a href="'+badgeUrl+'" target="_blank" rel="external nofollow noopener">'+badge+'</a>':badge;
    var titleHtml=titleUrl?'<a href="'+titleUrl+'" target="_blank" rel="external nofollow noopener">'+title+'</a>':title;
    return '<li><div class="row"><div class="col col-sm-2 abbr"><abbr class="badge rounded w-100" style="background-color:#0076df">'+badgeHtml+'</abbr></div><div id="'+id+'" class="col-sm-8"><div class="title">'+titleHtml+'</div><div class="author"> '+authors+' </div><div class="periodical">'+venue+'</div>'+(links||'')+'</div></div></li>';
  }
  function makeTitleExternal(id,url){
    var item=$('#'+id);
    var title=item.find('.title').first();
    if(title.length && title.find('a').length===0){title.wrapInner('<a href="'+url+'" target="_blank" rel="external nofollow noopener"></a>');}
  }

  if(path==='/'||path==='/index.html'){
    var info=$('.more-info').first();
    if(info.length){info.find('p').first().text('5-248 Kenneth H. Keller Hall');}

    var bio=$('.clearfix').first();
    if(bio.length){
      var first=bio.find('p').first();
      first.html(first.html().replace('second-year Ph.D. student','third-year Ph.D. student'));
      bio.find('p').filter(function(){return $(this).text().indexOf('My current work includes TRASA')!==-1;}).remove();
      var research=bio.find('p').eq(1);
      if(research.length){research.html('My research focuses on geospatial AI, computer vision, document image analysis, and multimodal understanding of historical maps. I work on automated map digitization, with emphasis on legend extraction, line extraction, road network reconstruction, topology preservation, vision transformers, and layout understanding.');}
    }

    var tbl=$('.news table').first();
    if(tbl.length){
      tbl.find('tr').filter(function(){
        var t=$(this).text();
        return t.indexOf('FRIEDA: Benchmarking Multi-Step Cartographic Reasoning')!==-1 || t.indexOf('CSpotlight: Mapping the Past')!==-1 || t.indexOf('Frontiers of Generative AI')!==-1;
      }).remove();
      tbl.prepend(
        '<tr><th scope="row" style="width: 20%">Aug 2026</th><td>I will present <em>TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps</em> at the <a href="https://sites.google.com/umn.edu/frontiers/home" rel="external nofollow noopener" target="_blank">Frontiers of Generative AI &amp; Science Workshop</a> at the University of Minnesota.</td></tr>'+ 
        '<tr><th scope="row" style="width: 20%">May 2026</th><td>I was featured in <a href="https://cse.umn.edu/cs/news/cspotlight-mapping-past" rel="external nofollow noopener" target="_blank">CSpotlight: Mapping the Past</a>, a University of Minnesota Computer Science &amp; Engineering profile about my research on historical map analysis.</td></tr>'+ 
        '<tr><th scope="row" style="width: 20%">Apr 2026</th><td>Our paper <a href="https://iclr.cc/virtual/2026/poster/10009592" rel="external nofollow noopener" target="_blank"><em>FRIEDA: Benchmarking Multi-Step Cartographic Reasoning in Vision-Language Models</em></a> appeared at <a href="https://iclr.cc/Conferences/2026" rel="external nofollow noopener" target="_blank">ICLR 2026</a>.</td></tr>'
      );

      var legacyTitles=[
        'Detecting Legend Items on Historical Maps',
        'Detecting Legend Items on Historical Maps Using GPT-4o with In-Context Learning',
        'DIGMAPPER: A Modular System for Automated Geologic Map Digitization',
        'Context-Aware Trajectory Anomaly Detection'
      ];
      tbl.find('td').each(function(){
        var td=$(this);
        td.html(td.html().replace(/“|”/g,''));
        legacyTitles.forEach(function(title){
          td.find('a').filter(function(){return $(this).text().trim()===title;}).each(function(){if(!$(this).parent().is('em')){$(this).wrap('<em></em>');}});
          if(td.text().indexOf(title)!==-1 && td.find('em').filter(function(){return $(this).text().trim()===title;}).length===0){
            td.html(td.html().replace(title,'<em>'+title+'</em>'));
          }
        });
      });
    }
  }

  if(path.indexOf('/publications/')===0){
    var pub=$('.publications').first();
    if(pub.length){
      pub.children('h2').filter(function(){return $(this).text().trim()==='2026';}).each(function(){var h=$(this),next=h.next('ol.bibliography');if(next.find('#trasa2026,#frieda2026,#frontiers2026').length){next.remove();h.remove();}});
      var trasa=publicationItem('trasa2026','Manuscript','','TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps','', '<strong>Sofia Kirsanova</strong>, Zekun Li, Stefan Leyk, Craig A. Knoblock, and Yao-Yi Chiang','<em>Manuscript in preparation</em>, 2026','');
      var frieda=publicationItem('frieda2026','ICLR','https://iclr.cc/virtual/2026/poster/10009592','FRIEDA: Benchmarking Multi-Step Cartographic Reasoning in Vision-Language Models','https://openreview.net/forum?id=QQCadccQqU','Jihun Pyo, Yuxi Jiao, Daehan Jung, Zekun Li, Leeje Jang, <strong>Sofia Kirsanova</strong>, Jina Kim, Yijun Lin, Qian Liu, Jie Xie, Hooman Askari, Ning Xu, Muhao Chen, and Yao-Yi Chiang','<em><a href="https://iclr.cc/virtual/2026/poster/10009592" target="_blank" rel="external nofollow noopener">International Conference on Learning Representations (ICLR)</a></em>, 2026','<div class="links"><a class="btn btn-sm z-depth-0" href="https://openreview.net/forum?id=QQCadccQqU" target="_blank" rel="external nofollow noopener">Paper</a><a class="btn btn-sm z-depth-0" href="https://iclr.cc/virtual/2026/poster/10009592" target="_blank" rel="external nofollow noopener">ICLR</a></div>');
      var frontiers=publicationItem('frontiers2026','Frontiers','https://sites.google.com/umn.edu/frontiers/home','TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps','https://sites.google.com/umn.edu/frontiers/home','<strong>Sofia Kirsanova</strong>, Zekun Li, Stefan Leyk, Craig A. Knoblock, and Yao-Yi Chiang','<em>Frontiers of Generative AI &amp; Science Workshop</em>, University of Minnesota, Aug 2026<div class="periodical">Poster presentation</div>','<div class="links"><a class="btn btn-sm z-depth-0" href="https://sites.google.com/umn.edu/frontiers/home" target="_blank" rel="external nofollow noopener">Workshop</a></div>');
      pub.prepend('<h2 class="bibliography">2026</h2><ol class="bibliography">'+trasa+frieda+frontiers+'</ol>');

      makeTitleExternal('digmapper','https://arxiv.org/abs/2506.16006');
      makeTitleExternal('geosearch2025','https://doi.org/10.1145/3764920.3770590');
      makeTitleExternal('haystac','https://doi.org/10.1145/3681765.3698465');
      makeTitleExternal('connect6','https://snto.mospolytech.ru/files/Sbornik_SNK_2020_fin.pdf');
    }
  }

  if(path.indexOf('/cv/')===0){
    var pubAnchor=$('#publications');
    if(pubAnchor.length){pubAnchor.next('.card').remove();pubAnchor.remove();}

    var educationCard=$('#education').next('.card');
    if(educationCard.length){
      if(educationCard.text().indexOf('M.Sc.')===-1){
        var eduList=educationCard.find('ul.list-group').first();
        var masters='<li class="list-group-item"><div class="row"><div class="col-xs-2 cl-sm-2 col-md-2 text-center date-column"><table class="table-cv"><tbody><tr><td><span class="badge font-weight-bold danger-color-dark text-uppercase align-middle" style="min-width:75px">2024.08 - 2026</span></td></tr><tr><td><p class="location"><i class="fa-solid fa-location-dot iconlocation"></i> Minnesota, USA</p></td></tr></tbody></table></div><div class="col-xs-10 cl-sm-10 col-md-10 mt-2 mt-md-0"><h6 class="title font-weight-bold ml-1 ml-md-4">M.Sc.</h6><h6 class="ml-1 ml-md-4" style="font-size:.95rem">University of Minnesota Twin Cities</h6><h6 class="ml-1 ml-md-4" style="font-size:.95rem;font-style:italic">Computer Science</h6></div></div></li>';
        eduList.children('li').first().after(masters);
      }
      educationCard.find('h6.title a').each(function(){$(this).replaceWith($(this).text());});
    }

    var projectsCard=$('#projects').next('.card');
    if(projectsCard.length){
      projectsCard.find('li.list-group-item').each(function(){
        var item=$(this),text=item.text();
        if(text.indexOf('IMOLA: Automated Road Network Extraction')!==-1){
          item.find('h6.title').html('<a href="/projects/imola/">IMOLA: Automated Road Network Extraction &amp; Topological Mapping</a>');
          item.find('h6[style*="italic"]').remove();
          item.find('.col-md-10').first().find('.project-meta').remove();
          item.find('.col-md-10').first().children('h6.title').after('<div class="project-meta ml-1 ml-md-4 mb-2">'+sponsorBadge('NSF',nsfUrl,'fa-solid fa-landmark')+statusBadge('Ongoing','success')+'</div>');
        }else if(text.indexOf('CriticalMAAS: Legend Detection')!==-1){
          item.find('h6.title').html('<a href="/projects/criticalmaas/">CriticalMAAS: Legend Detection &amp; Map Layout Analysis</a>');
          item.find('h6[style*="italic"]').remove();
          item.find('.col-md-10').first().find('.project-meta').remove();
          item.find('.col-md-10').first().children('h6.title').after('<div class="project-meta ml-1 ml-md-4 mb-2">'+sponsorBadge('DARPA',darpaUrl,'fa-solid fa-shield-halved')+statusBadge('Completed','secondary')+'</div>');
        }else if(text.indexOf('Methods for Detecting Critical Events in System Log Data')!==-1){
          item.find('ul.items').html('<li><span class="item">Developed preprocessing and CNN-based anomaly detection methods for system logs.</span></li>');
        }else if(text.indexOf('Monte Carlo Algorithms for Connect6')!==-1){
          item.find('ul.items').html('<li><span class="item">Compared Monte Carlo and heuristic algorithms for Connect6.</span></li>');
        }
      });
    }

    var title=$('.post-title').first();
    title.find('a.float-right').remove();
    var header=$('.post-header').first();
    var desc=header.find('.post-description');
    if(desc.length===0){header.append('<p class="post-description"></p>');desc=header.find('.post-description');}
    desc.html('<strong>Documents:</strong> <a class="btn btn-sm z-depth-0" href="'+academicCvUrl+'" target="_blank" rel="external nofollow noopener"><i class="fa-solid fa-file-lines"></i> Academic CV — Google Doc</a> <a class="btn btn-sm z-depth-0" href="'+resumeUrl+'" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf"></i> Industry Resume — PDF</a>');
  }

  if(path==='/projects/'||path==='/projects/index.html'){
    $('.projects .card-title').filter(function(){return $(this).text().indexOf('TRASA')!==-1;}).closest('.col').remove();
    $('a[href="/projects/imola/"]').find('.card-text').first().text('NSF project on extracting and reconstructing historical road networks from topographic maps.');
    $('a[href="/projects/criticalmaas/"]').find('.card-text').first().text('DARPA project on automated legend extraction and map-layout understanding for geologic maps.');
  }

  if(path.indexOf('/projects/imola/')===0){
    $('.post-description').text('NSF project on historical road-network extraction from topographic maps.');
    $('article').html(
      '<p>'+sponsorBadge('NSF',nsfUrl,'fa-solid fa-landmark')+statusBadge('Ongoing · 2024–2027','success')+'</p>'+ 
      '<h2>Overview</h2><p>IMOLA develops methods and data infrastructure for recovering historical U.S. road networks from scanned topographic maps.</p>'+ 
      '<h2>My Role</h2><ul><li>Develop TRASA within IMOLA, combining graph-based line detection, segmentation guidance, and node-type classification.</li><li>Reconstruct routable road graphs and evaluate geometric and topological errors.</li></ul>'+ 
      '<h2>Selected Outputs</h2><ul><li><strong>TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps.</strong> Manuscript in preparation, 2026.</li><li><a href="https://sites.google.com/umn.edu/frontiers/home" target="_blank" rel="external nofollow noopener">TRASA poster, Frontiers of Generative AI &amp; Science Workshop</a>, Aug 2026.</li></ul>'+ 
      '<p>Collaborators: <a href="https://yaoyichi.github.io/" target="_blank">Yao-Yi Chiang</a>, <a href="https://zekun-li.github.io/" target="_blank">Zekun Li</a>, <a href="https://www.colorado.edu/geography/stefan-leyk-0" target="_blank">Stefan Leyk</a>, and <a href="https://www.isi.edu/directory/craig-knoblock/" target="_blank">Craig A. Knoblock</a>.</p>'
    );
  }

  if(path.indexOf('/projects/criticalmaas/')===0){
    $('.post-description').text('DARPA project on automated geologic-map digitization.');
    $('article').html(
      '<p>'+sponsorBadge('DARPA',darpaUrl,'fa-solid fa-shield-halved')+statusBadge('Completed · 2023–2025','secondary')+'</p>'+ 
      '<h2>Overview</h2><p>CriticalMAAS developed AI tools to turn scanned geologic maps into structured, analysis-ready data.</p>'+ 
      '<h2>My Role</h2><ul><li>Detected legend symbols and text and linked them into structured legend items.</li><li>Combined LayoutLMv3 with GPT-4o prompting for layout-aware legend parsing.</li></ul>'+ 
      '<h2>Selected Publications</h2><ul><li><a href="https://arxiv.org/abs/2506.16006" target="_blank" rel="external nofollow noopener">DIGMAPPER: A Modular System for Automated Geologic Map Digitization</a>.</li><li><a href="https://doi.org/10.1145/3764920.3770590" target="_blank" rel="external nofollow noopener">Detecting Legend Items on Historical Maps Using GPT-4o with In-Context Learning</a>.</li></ul>'+ 
      '<p>Work completed in the <a href="https://knowledge-computing.github.io/" target="_blank">Knowledge Computing Lab</a> with <a href="https://yaoyichi.github.io/" target="_blank">Yao-Yi Chiang</a> and collaborators.</p>'
    );
  }

  if(path.indexOf('/teaching/')===0){
    document.title='teaching & mentoring | Sofia Kirsanova';
    $('.post-title').first().text('teaching & mentoring');
    $('a.nav-link[href="/teaching/"]').contents().filter(function(){return this.nodeType===3;}).first().replaceWith('teaching & mentoring ');
    var mentoring=$('#mentoring');
    if(mentoring.length){
      mentoring.nextAll().remove();
      mentoring.after('<p>I mentor undergraduate students interested in computer vision, geospatial AI, and map digitization.</p><p>Student projects may involve preparing datasets, running segmentation or line-extraction experiments, evaluating model outputs, or reproducing a recent paper.</p><p>Python experience is expected. Research experience is helpful but not required.</p><p>To contact me, email <a href="mailto:kirsa002@umn.edu">kirsa002@umn.edu</a> with the subject <strong>Undergraduate Research Interest</strong>. Include a short introduction, your resume or CV, relevant coursework or projects, and your weekly availability.</p>');
    }
  }
});
$(document).ready(function(){
  var path=window.location.pathname;
  var academicCvUrl='https://docs.google.com/document/d/1_PbEPhMcy_ImRT284Wbx4m0WldGxpSvreag2lodb7f0/edit?usp=sharing';
  var resumeUrl='/assets/pdf/CV_FAANG-loader.html';
  var nsfUrl='https://www.nsf.gov/';
  var nsfLogo='https://cdn.freebiesupply.com/logos/large/2x/nsf-4-logo-png-transparent.png';
  var darpaUrl='https://www.darpa.mil/';
  var criticalmaasUrl='https://www.darpa.mil/research/programs/critical-mineral-assessments-with-ai-support';
  var darpaLogo='https://upload.wikimedia.org/wikipedia/commons/3/36/Darpa-logo-2026.png';

  function escapeHtml(value){
    return String(value).replace(/[&<>"']/g,function(ch){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch];});
  }
  function sponsorLogo(label,url,src,width,title){
    return '<a class="d-inline-flex align-items-center mr-3" href="'+url+'" target="_blank" rel="external nofollow noopener" title="'+title+'" aria-label="'+label+'"><img src="'+src+'" alt="'+label+' logo" style="width:'+width+'px;height:34px;object-fit:contain"></a>';
  }
  function statusBadge(label,kind){
    return '<span class="badge badge-'+kind+' px-2 py-1">'+label+'</span>';
  }
  function cvItem(date,title,subtitle,url){
    var titleHtml=url?'<a href="'+url+'" target="_blank" rel="external nofollow noopener">'+title+'</a>':title;
    return '<li class="list-group-item"><div class="row"><div class="col-xs-2 cl-sm-2 col-md-2 text-center date-column"><span class="badge font-weight-bold danger-color-dark text-uppercase align-middle" style="min-width:75px">'+date+'</span></div><div class="col-xs-10 cl-sm-10 col-md-10 mt-2 mt-md-0"><h6 class="title font-weight-bold ml-1 ml-md-4">'+titleHtml+'</h6>'+(subtitle?'<h6 class="ml-1 ml-md-4" style="font-size:.95rem">'+subtitle+'</h6>':'')+'</div></div></li>';
  }
  function bibHtml(bibtex,extraLinks){
    return '<div class="links">'+(extraLinks||'')+'<a class="bibtex btn btn-sm z-depth-0" role="button">Bib</a></div><div class="bibtex hidden"><figure class="highlight"><pre><code class="language-bibtex" data-lang="bibtex">'+escapeHtml(bibtex)+'</code></pre></figure></div>';
  }
  function publicationItem(id,badge,badgeUrl,color,textColor,title,titleUrl,authors,venue,bibtex,extraLinks){
    var badgeHtml=badgeUrl?'<a href="'+badgeUrl+'" target="_blank" rel="external nofollow noopener">'+badge+'</a>':badge;
    var titleHtml=titleUrl?'<a href="'+titleUrl+'" target="_blank" rel="external nofollow noopener">'+title+'</a>':title;
    return '<li><div class="row"><div class="col col-sm-2 abbr"><abbr class="badge rounded w-100" style="background-color:'+color+';color:'+textColor+'">'+badgeHtml+'</abbr></div><div id="'+id+'" class="col-sm-8"><div class="title">'+titleHtml+'</div><div class="author"> '+authors+' </div><div class="periodical">'+venue+'</div>'+bibHtml(bibtex,extraLinks)+'</div></div></li>';
  }
  function setPublicationTitle(id,url){
    var title=$('#'+id).find('.title').first();
    if(!title.length){return;}
    title.find('a').each(function(){$(this).replaceWith($(this).contents());});
    if(url){title.wrapInner('<a href="'+url+'" target="_blank" rel="external nofollow noopener"></a>');}
  }
  function styleVenue(id,label,url,color,textColor){
    var item=$('#'+id);
    if(!item.length){return;}
    var badge=item.closest('.row').find('.abbr abbr.badge').first();
    badge.css({'background-color':color,'color':textColor});
    var link=badge.find('a');
    if(url){
      if(link.length){link.attr('href',url).attr('target','_blank').attr('rel','external nofollow noopener');}
      else{badge.html('<a href="'+url+'" target="_blank" rel="external nofollow noopener">'+label+'</a>');link=badge.find('a');}
    }else{badge.text(label);}
    badge.find('a').css('color',textColor);
    item.find('.periodical a').each(function(){$(this).replaceWith($(this).contents());});
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
        return t.indexOf('FRIEDA: Benchmarking Multi-Step Cartographic Reasoning')!==-1 || t.indexOf('CSpotlight')!==-1 || t.indexOf('Frontiers of Generative AI')!==-1;
      }).remove();
      tbl.prepend(
        '<tr><th scope="row" style="width:20%">Aug 2026</th><td>I will present <em>TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps</em> at the <a href="https://sites.google.com/umn.edu/frontiers/home" rel="external nofollow noopener" target="_blank">Frontiers of Generative AI &amp; Science Workshop</a> at the University of Minnesota.</td></tr>'+ 
        '<tr><th scope="row" style="width:20%">May 2026</th><td>I was featured in CSpotlight in the article <a href="https://cse.umn.edu/cs/news/cspotlight-mapping-past" rel="external nofollow noopener" target="_blank"><em>Mapping the Past</em></a>.</td></tr>'+ 
        '<tr><th scope="row" style="width:20%">Apr 2026</th><td>Our paper <a href="https://openreview.net/forum?id=QQCadccQqU" rel="external nofollow noopener" target="_blank"><em>FRIEDA: Benchmarking Multi-Step Cartographic Reasoning in Vision-Language Models</em></a> appeared at <a href="https://iclr.cc/virtual/2026/poster/10009592" rel="external nofollow noopener" target="_blank">ICLR 2026</a>.</td></tr>'
      );

      var legacyTitles=[
        'Detecting Legend Items on Historical Maps Using GPT-4o with In-Context Learning',
        'DIGMAPPER: A Modular System for Automated Geologic Map Digitization',
        'Context-Aware Trajectory Anomaly Detection',
        'Detecting Legend Items on Historical Maps'
      ].sort(function(a,b){return b.length-a.length;});
      tbl.find('td').each(function(){
        var td=$(this);
        td.html(td.html().replace(/“|”/g,''));
        legacyTitles.forEach(function(title){
          var anchors=td.find('a').filter(function(){return $(this).text().trim()===title;});
          if(anchors.length){anchors.each(function(){if(!$(this).parent().is('em')){$(this).wrap('<em></em>');}});return;}
          if(td.text().indexOf(title)!==-1 && td.find('em').filter(function(){return $(this).text().trim()===title;}).length===0){td.html(td.html().replace(title,'<em>'+title+'</em>'));}
        });
      });
    }
  }

  if(path.indexOf('/publications/')===0){
    var pub=$('.publications').first();
    if(pub.length){
      pub.children('h2').filter(function(){return $(this).text().trim()==='2026';}).each(function(){var h=$(this),next=h.next('ol.bibliography');if(next.find('#trasa2026,#frieda2026,#frontiers2026').length){next.remove();h.remove();}});

      var trasaBib='@unpublished{kirsanova2026trasa,\n  title = {TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps},\n  author = {Kirsanova, Sofia and Li, Zekun and Leyk, Stefan and Knoblock, Craig A. and Chiang, Yao-Yi},\n  note = {Manuscript in preparation},\n  year = {2026}\n}';
      var friedaBib='@inproceedings{pyo2026frieda,\n  title = {FRIEDA: Benchmarking Multi-Step Cartographic Reasoning in Vision-Language Models},\n  author = {Pyo, Jihun and Jiao, Yuxi and Jung, Daehan and Li, Zekun and Jang, Leeje and Kirsanova, Sofia and Kim, Jina and Lin, Yijun and Liu, Qian and Xie, Jie and Askari, Hooman and Xu, Ning and Chen, Muhao and Chiang, Yao-Yi},\n  booktitle = {International Conference on Learning Representations},\n  year = {2026},\n  url = {https://openreview.net/forum?id=QQCadccQqU}\n}';
      var frontiersBib='@inproceedings{kirsanova2026trasa_frontiers,\n  title = {TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps},\n  author = {Kirsanova, Sofia and Li, Zekun and Leyk, Stefan and Knoblock, Craig A. and Chiang, Yao-Yi},\n  booktitle = {Frontiers of Generative AI and Science Workshop},\n  year = {2026},\n  month = aug,\n  location = {Minneapolis, MN, USA},\n  note = {Poster presentation},\n  url = {https://sites.google.com/umn.edu/frontiers/home}\n}';

      var trasa=publicationItem('trasa2026','Manuscript','','#6c757d','#fff','TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps','', '<strong>Sofia Kirsanova</strong>, Zekun Li, Stefan Leyk, Craig A. Knoblock, and Yao-Yi Chiang','<em>Manuscript in preparation</em>, 2026',trasaBib,'');
      var frieda=publicationItem('frieda2026','ICLR','https://iclr.cc/virtual/2026/poster/10009592','#123b73','#fff','FRIEDA: Benchmarking Multi-Step Cartographic Reasoning in Vision-Language Models','https://openreview.net/forum?id=QQCadccQqU','Jihun Pyo, Yuxi Jiao, Daehan Jung, Zekun Li, Leeje Jang, <strong>Sofia Kirsanova</strong>, Jina Kim, Yijun Lin, Qian Liu, Jie Xie, Hooman Askari, Ning Xu, Muhao Chen, and Yao-Yi Chiang','<em>International Conference on Learning Representations (ICLR)</em>, 2026',friedaBib,'<a class="btn btn-sm z-depth-0" href="https://openreview.net/forum?id=QQCadccQqU" target="_blank" rel="external nofollow noopener">Paper</a>');
      var frontiers=publicationItem('frontiers2026','Frontiers','https://sites.google.com/umn.edu/frontiers/home','#00838f','#fff','TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps','', '<strong>Sofia Kirsanova</strong>, Zekun Li, Stefan Leyk, Craig A. Knoblock, and Yao-Yi Chiang','<em>Frontiers of Generative AI &amp; Science Workshop</em>, University of Minnesota, Aug 2026<div class="periodical">Poster presentation</div>',frontiersBib,'');
      pub.prepend('<h2 class="bibliography">2026</h2><ol class="bibliography">'+trasa+frieda+frontiers+'</ol>');

      var configs={
        digmapper:{label:'SIGSPATIAL',venue:'https://sigspatial2025.sigspatial.org/industry-accepted/',color:'#1565c0',text:'#fff',paper:'https://arxiv.org/abs/2506.16006'},
        geosearch2025:{label:'SIGSPATIAL',venue:'https://geosearch-workshop.github.io/geosearch2025/',color:'#1565c0',text:'#fff',paper:'https://doi.org/10.1145/3764920.3770590'},
        geosearch2025_presentation:{label:'SIGSPATIAL',venue:'https://geosearch-workshop.github.io/geosearch2025/',color:'#1565c0',text:'#fff',paper:'https://doi.org/10.1145/3764920.3770590'},
        mngislis2025_presentation:{label:'MN GIS/LIS',venue:'https://www.mngislis.org/events/register.aspx?id=1721440',color:'#43a047',text:'#fff',paper:''},
        bigten2025_presentation:{label:'BTAA GIN',venue:'https://gin.btaa.org/conference/2025/',color:'#f9a825',text:'#4a3500',paper:''},
        haystac:{label:'SIGSPATIAL',venue:'https://onspatial.github.io/GeoAnomalies24/',color:'#1565c0',text:'#fff',paper:'https://doi.org/10.1145/3681765.3698465'},
        process_mining_lomonosov:{label:'MSU',venue:'https://istina.ipmnet.ru/conferences/547419982/',color:'#ef6c00',text:'#fff',paper:'https://istina.ipmnet.ru/conferences/547419982/'},
        process_mining_tikhonov:{label:'MSU',venue:'https://istina.msu.ru/conferences/505192432/',color:'#ef6c00',text:'#fff',paper:'https://istina.msu.ru/conferences/505192432/'},
        connect6:{label:'Polytech',venue:'https://mospolytech.ru/',color:'#c62828',text:'#fff',paper:'https://snto.mospolytech.ru/files/Sbornik_SNK_2020_fin.pdf'}
      };
      Object.keys(configs).forEach(function(id){var c=configs[id];styleVenue(id,c.label,c.venue,c.color,c.text);setPublicationTitle(id,c.paper);});

      var btaa=$('#bigten2025_presentation');
      if(btaa.length && btaa.find('a[href*="youtu.be/5XJWGtW_xSE"]').length===0){btaa.find('.links').first().prepend('<a class="btn btn-sm z-depth-0" href="https://youtu.be/5XJWGtW_xSE?si=V-dSs77LSJ9WtwNg" target="_blank" rel="external nofollow noopener">Video</a>');}

      pub.off('click.profileBib','a.bibtex').on('click.profileBib','a.bibtex',function(e){e.preventDefault();var container=$(this).closest('.col-sm-8');container.find('.bibtex.hidden').toggleClass('open');});
    }
  }

  if(path.indexOf('/cv/')===0){
    var publicationsAnchor=$('#publications');
    if(publicationsAnchor.length){publicationsAnchor.next('.card').remove();publicationsAnchor.remove();}

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
        var item=$(this),text=item.text(),body=item.find('.col-md-10').first();
        if(text.indexOf('IMOLA: Automated Road Network Extraction')!==-1){
          item.find('h6.title').html('<a href="/projects/imola/">IMOLA: Automated Road Network Extraction &amp; Topological Mapping</a>');
          item.find('h6[style*="italic"]').remove();body.find('.project-meta').remove();
          body.children('h6.title').after('<div class="project-meta ml-1 ml-md-4 mb-2 d-flex align-items-center">'+sponsorLogo('NSF',nsfUrl,nsfLogo,34,'U.S. National Science Foundation')+statusBadge('Ongoing','warning')+'</div>');
        }else if(text.indexOf('CriticalMAAS: Legend Detection')!==-1){
          item.find('h6.title').html('<a href="/projects/criticalmaas/">CriticalMAAS: Legend Detection &amp; Map Layout Analysis</a>');
          item.find('h6[style*="italic"]').remove();body.find('.project-meta').remove();
          body.children('h6.title').after('<div class="project-meta ml-1 ml-md-4 mb-2 d-flex align-items-center">'+sponsorLogo('DARPA',darpaUrl,darpaLogo,54,'Defense Advanced Research Projects Agency')+statusBadge('Completed','success')+'</div>');
        }else if(text.indexOf('Methods for Detecting Critical Events in System Log Data')!==-1){
          item.find('ul.items').html('<li><span class="item">Developed preprocessing and CNN-based anomaly detection methods for system logs.</span></li>');
        }else if(text.indexOf('Monte Carlo Algorithms for Connect6')!==-1){
          item.find('ul.items').html('<li><span class="item">Compared Monte Carlo and heuristic algorithms for Connect6.</span></li>');
        }
      });
    }

    var awardsAnchor=$('#awards');
    var awardsCard=awardsAnchor.next('.card');
    if(awardsCard.length){
      awardsCard.find('ul.list-group').first().html(
        cvItem('2026','Outstanding Academic Achievement Award','Department of German, Nordic, Slavic &amp; Dutch, University of Minnesota','')+
        cvItem('2022','TV NeuroTech Hackathon — 1st Prize','Data analytics challenge','https://it-events.com/en/events/22741')
      );
    }

    $('#service').next('.card').remove();$('#service').remove();
    var service='<a class="anchor" id="service"></a><div class="card mt-3 p-3"><h3 class="card-title font-weight-medium">Service</h3><div><ul class="card-text font-weight-light list-group list-group-flush">'+
      cvItem('2026','External Reviewer','ACM SIGSPATIAL 2026 Applications Track','')+
      cvItem('2026–Present','Outreach Lead','Computer Science Graduate Student Association, University of Minnesota','')+
      cvItem('2024–Present','Publicity Chair &amp; Webmaster','Spatial Women (SpatialW)','')+
      cvItem('2025','Best Poster Committee Member','Data Science Poster Fair, University of Minnesota','')+
      cvItem('2024–2026','Committee Chair','Nauchnyj Avangard High School Research Competition','')+
      '</ul></div></div>';
    var workAnchor=$('#work');if(workAnchor.length){workAnchor.before(service);}else{$('.cv').append(service);}

    $('.cv').find('*').filter(function(){return $(this).children().length===0&&$(this).text().trim()==='Beginner';}).text('Intermediate');

    var title=$('.post-title').first();title.find('a.float-right').remove();
    var header=$('.post-header').first();var desc=header.find('.post-description');
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
      '<p class="d-flex align-items-center">'+sponsorLogo('NSF',nsfUrl,nsfLogo,42,'U.S. National Science Foundation')+statusBadge('Ongoing · 2024–2027','warning')+'</p>'+ 
      '<h2>Overview</h2><p>IMOLA develops methods and data infrastructure for recovering historical U.S. road networks from scanned topographic maps.</p>'+ 
      '<h2>My Role</h2><ul><li>Develop a topology-preserving road-network extraction method that combines graph-based line detection, segmentation guidance, and node-type classification.</li><li>Reconstruct routable road graphs and evaluate geometric and topological errors.</li></ul>'+ 
      '<h2>Selected Outputs</h2><ul><li><strong>TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps.</strong> Manuscript in preparation, 2026.</li><li><a href="https://sites.google.com/umn.edu/frontiers/home" target="_blank" rel="external nofollow noopener">TRASA poster, Frontiers of Generative AI &amp; Science Workshop</a>, Aug 2026.</li></ul>'+ 
      '<p>Collaborators: <a href="https://yaoyichi.github.io/" target="_blank">Dr. Yao-Yi Chiang</a>, <a href="https://zekun-li.github.io/" target="_blank">Dr. Zekun Li</a>, <a href="https://www.colorado.edu/geography/stefan-leyk-0" target="_blank">Dr. Stefan Leyk</a>, and <a href="https://www.isi.edu/directory/craig-knoblock/" target="_blank">Dr. Craig A. Knoblock</a>.</p>'
    );
  }

  if(path.indexOf('/projects/criticalmaas/')===0){
    $('.post-description').text('DARPA project on automated geologic-map digitization.');
    $('article').html(
      '<p class="d-flex align-items-center flex-wrap">'+sponsorLogo('DARPA',darpaUrl,darpaLogo,62,'Defense Advanced Research Projects Agency')+'<a class="mr-3" href="'+criticalmaasUrl+'" target="_blank" rel="external nofollow noopener">DARPA CriticalMAAS program</a>'+statusBadge('Completed · 2023–2025','success')+'</p>'+ 
      '<h2>Overview</h2><p>CriticalMAAS developed AI tools to turn scanned geologic maps into structured, analysis-ready data.</p>'+ 
      '<h2>My Role</h2><ul><li>Detected legend symbols and text and linked them into structured legend items.</li><li>Combined LayoutLMv3 with GPT-4o prompting for layout-aware legend parsing.</li></ul>'+ 
      '<h2>Selected Publications</h2><ul><li><a href="https://arxiv.org/abs/2506.16006" target="_blank" rel="external nofollow noopener">DIGMAPPER: A Modular System for Automated Geologic Map Digitization</a>.</li><li><a href="https://doi.org/10.1145/3764920.3770590" target="_blank" rel="external nofollow noopener">Detecting Legend Items on Historical Maps Using GPT-4o with In-Context Learning</a>.</li></ul>'+ 
      '<p>Work completed in the <a href="https://knowledge-computing.github.io/" target="_blank">Knowledge Computing Lab</a> with <a href="https://yaoyichi.github.io/" target="_blank">Dr. Yao-Yi Chiang</a> and collaborators.</p>'
    );
  }

  if(path.indexOf('/teaching/')===0){
    document.title='teaching & mentoring | Sofia Kirsanova';
    $('.post-title').first().text('teaching & mentoring');
    $('a.nav-link[href="/teaching/"]').contents().filter(function(){return this.nodeType===3;}).first().replaceWith('teaching & mentoring ');
    var mentoring=$('#mentoring');
    if(mentoring.length){
      mentoring.nextAll().remove();
      mentoring.after('<p>I mentor undergraduate students interested in computer vision, geospatial AI, and map digitization.</p><p>Possible student tasks:</p><ul><li>prepare and check datasets;</li><li>run segmentation or line-extraction experiments;</li><li>evaluate and visualize model outputs;</li><li>reproduce a recent research paper.</li></ul><p>Python experience is expected. Prior research experience is helpful but not required.</p><p>Email <a href="mailto:kirsa002@umn.edu">kirsa002@umn.edu</a> with the subject <strong>Undergraduate Research Interest</strong>. Please include:</p><ul><li>a short introduction;</li><li>your resume or CV;</li><li>relevant coursework or projects;</li><li>your weekly availability.</li></ul>');
    }
  }
});
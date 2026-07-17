$(document).ready(function(){if($("a.abstract").click(function(){$(this).parent().parent().find(".abstract.hidden").toggleClass("open"),$(this).parent().parent().find(".award.hidden.open").toggleClass("open"),$(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open")}),$("a.award").click(function(){$(this).parent().parent().find(".abstract.hidden.open").toggleClass("open"),$(this).parent().parent().find(".award.hidden").toggleClass("open"),$(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open")}),$("a.bibtex").click(function(){$(this).parent().parent().find(".abstract.hidden.open").toggleClass("open"),$(this).parent().parent().find(".award.hidden.open").toggleClass("open"),$(this).parent().parent().find(".bibtex.hidden").toggleClass("open")}),$("a").removeClass("waves-effect waves-light"),$("#toc-sidebar").length){$(".publications h2").each(function(){$(this).attr("data-toc-skip","")});var e="#toc-sidebar",t=$(e);Toc.init(t),$("body").scrollspy({target:e})}const n=document.createElement("link");n.href="../css/jupyter.css",n.rel="stylesheet",n.type="text/css";let a=determineComputedTheme();$(".jupyter-notebook-iframe-container iframe").each(function(){$(this).contents().find("head").append(n),"dark"==a&&$(this).bind("load",function(){$(this).contents().find("body").attr({"data-jp-theme-light":"false","data-jp-theme-name":"JupyterLab Dark"})})}),$("[data-toggle=\"popover\"]").popover({trigger:"hover"})});

$(document).ready(function(){
  var path=window.location.pathname;

  function publicationItem(id,badge,badgeUrl,title,authors,venue,links){
    var badgeHtml=badgeUrl
      ? '<a href="'+badgeUrl+'" target="_blank" rel="external nofollow noopener">'+badge+'</a>'
      : badge;
    return '<li><div class="row">'+
      '<div class="col col-sm-2 abbr"><abbr class="badge rounded w-100" style="background-color:#0076df">'+badgeHtml+'</abbr></div>'+
      '<div id="'+id+'" class="col-sm-8">'+
      '<div class="title">'+title+'</div>'+
      '<div class="author"> '+authors+' </div>'+
      '<div class="periodical">'+venue+'</div>'+
      (links||'')+
      '</div></div></li>';
  }

  if(path==='/'||path==='/index.html'){
    var bio=$('.clearfix').first();
    if(bio.length){
      var first=bio.find('p').first();
      first.html(first.html().replace('second-year Ph.D. student','third-year Ph.D. student'));
      bio.find('p').filter(function(){return $(this).text().indexOf('My current work includes TRASA')!==-1;}).remove();
      var research=bio.find('p').eq(1);
      if(research.length){
        research.html('My research focuses on geospatial AI, computer vision, document image analysis, and multimodal understanding of historical maps. I work on automated map digitization, with emphasis on legend extraction, line extraction, road network reconstruction, topology preservation, vision transformers, and layout understanding.');
      }
    }

    var tbl=$('.news table').first();
    if(tbl.length){
      tbl.find('tr').filter(function(){
        var text=$(this).text();
        return text.indexOf('FRIEDA: Benchmarking Multi-Step Cartographic Reasoning')!==-1 ||
               text.indexOf('CSpotlight: Mapping the Past')!==-1 ||
               text.indexOf('Frontiers of Generative AI')!==-1;
      }).remove();
      var rows=''+
        '<tr><th scope="row" style="width: 20%">Aug 2026</th><td>I will present <em>TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps</em> at the <a href="https://sites.google.com/umn.edu/frontiers/home" rel="external nofollow noopener" target="_blank">Frontiers of Generative AI &amp; Science Workshop</a> at the University of Minnesota.</td></tr>'+
        '<tr><th scope="row" style="width: 20%">May 2026</th><td>I was featured in <a href="https://cse.umn.edu/cs/news/cspotlight-mapping-past" rel="external nofollow noopener" target="_blank">CSpotlight: Mapping the Past</a>, a University of Minnesota Computer Science &amp; Engineering profile about my research on historical map analysis.</td></tr>'+
        '<tr><th scope="row" style="width: 20%">Apr 2026</th><td>Our paper <a href="https://iclr.cc/virtual/2026/poster/10009592" rel="external nofollow noopener" target="_blank"><em>FRIEDA: Benchmarking Multi-Step Cartographic Reasoning in Vision-Language Models</em></a> appeared at <a href="https://iclr.cc/Conferences/2026" rel="external nofollow noopener" target="_blank">ICLR 2026</a>.</td></tr>';
      tbl.prepend(rows);
    }
  }

  if(path.indexOf('/publications/')===0){
    var pub=$('.publications').first();
    if(pub.length){
      pub.children('h2').filter(function(){return $(this).text().trim()==='2026';}).each(function(){
        var h=$(this), next=h.next('ol.bibliography');
        if(next.find('#trasa2026, #frieda2026, #frontiers2026').length){next.remove();h.remove();}
      });

      var trasa=publicationItem(
        'trasa2026','Manuscript','',
        'TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps',
        '<strong>Sofia Kirsanova</strong>, Zekun Li, Stefan Leyk, Craig A. Knoblock, and Yao-Yi Chiang',
        '<em>Manuscript in preparation</em>, 2026',''
      );
      var frieda=publicationItem(
        'frieda2026','ICLR','https://iclr.cc/virtual/2026/poster/10009592',
        'FRIEDA: Benchmarking Multi-Step Cartographic Reasoning in Vision-Language Models',
        'Jiyoon Pyo, Yuankun Jiao, Dongwon Jung, Zekun Li, Leeje Jang, <strong>Sofia Kirsanova</strong>, Jina Kim, Yijun Lin, Qin Liu, Junyi Xie, Hadi Askari, Nan Xu, Muhao Chen, and Yao-Yi Chiang',
        '<em><a href="https://iclr.cc/virtual/2026/poster/10009592" target="_blank" rel="external nofollow noopener">International Conference on Learning Representations (ICLR)</a></em>, 2026',
        '<div class="links"><a class="btn btn-sm z-depth-0" href="https://openreview.net/forum?id=QQCadccQqU" target="_blank" rel="external nofollow noopener">Paper</a><a class="btn btn-sm z-depth-0" href="https://iclr.cc/virtual/2026/poster/10009592" target="_blank" rel="external nofollow noopener">ICLR</a></div>'
      );
      var frontiers=publicationItem(
        'frontiers2026','Frontiers','https://sites.google.com/umn.edu/frontiers/home',
        'TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps',
        '<strong>Sofia Kirsanova</strong>, Zekun Li, Stefan Leyk, Craig A. Knoblock, and Yao-Yi Chiang',
        '<em><a href="https://sites.google.com/umn.edu/frontiers/home" target="_blank" rel="external nofollow noopener">Frontiers of Generative AI &amp; Science Workshop</a></em>, University of Minnesota, Minneapolis, MN, USA, Aug 2026<div class="periodical">Poster presentation</div>',
        '<div class="links"><a class="btn btn-sm z-depth-0" href="https://sites.google.com/umn.edu/frontiers/home" target="_blank" rel="external nofollow noopener">Workshop</a></div>'
      );
      pub.prepend('<h2 class="bibliography">2026</h2><ol class="bibliography">'+trasa+frieda+frontiers+'</ol>');
    }
  }

  if(path.indexOf('/cv/')===0){
    $('.card-title').filter(function(){return $(this).text().trim()==='2026 Updates';}).closest('.card').remove();

    var educationAnchor=$('#education');
    var educationCard=educationAnchor.next('.card');
    if(educationCard.length && educationCard.text().indexOf('M.Sc.')===-1){
      var eduList=educationCard.find('ul.list-group').first();
      var masters='<li class="list-group-item"><div class="row">'+
        '<div class="col-xs-2 cl-sm-2 col-md-2 text-center date-column"><table class="table-cv"><tbody><tr><td><span class="badge font-weight-bold danger-color-dark text-uppercase align-middle" style="min-width: 75px">2024.08 - 2026</span></td></tr><tr><td><p class="location"><i class="fa-solid fa-location-dot iconlocation"></i> Minnesota, USA</p></td></tr></tbody></table></div>'+
        '<div class="col-xs-10 cl-sm-10 col-md-10 mt-2 mt-md-0"><h6 class="title font-weight-bold ml-1 ml-md-4">M.Sc.</h6><h6 class="ml-1 ml-md-4" style="font-size: 0.95rem">University of Minnesota Twin Cities</h6><h6 class="ml-1 ml-md-4" style="font-size: 0.95rem; font-style: italic">Computer Science</h6></div></div></li>';
      eduList.children('li').first().after(masters);
    }

    var publicationsAnchor=$('#publications');
    var publicationsCard=publicationsAnchor.next('.card');
    if(publicationsCard.length){
      var cvPubs=publicationsCard.find('ul.list-group').first();
      cvPubs.children('li').filter(function(){
        var text=$(this).text();
        return text.indexOf('TRASA: Topology-Preserving Road Network Extraction')!==-1 || text.indexOf('FRIEDA: Benchmarking Multi-Step')!==-1;
      }).remove();
      var cvTrasa='<li class="list-group-item"><div class="row"><div class="col-xs-2 cl-sm-2 col-md-2 text-center date-column"><table class="table-cv"><tbody><tr><td><span class="badge font-weight-bold danger-color-dark text-uppercase align-middle" style="min-width: 75px">2026</span></td></tr></tbody></table></div><div class="col-xs-10 cl-sm-10 col-md-10 mt-2 mt-md-0"><h6 class="title font-weight-bold ml-1 ml-md-4"><a href="/publications/#trasa2026">TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps</a></h6><h6 class="ml-1 ml-md-4" style="font-size: 0.95rem">Manuscript in preparation</h6></div></div></li>';
      var cvFrieda='<li class="list-group-item"><div class="row"><div class="col-xs-2 cl-sm-2 col-md-2 text-center date-column"><table class="table-cv"><tbody><tr><td><span class="badge font-weight-bold danger-color-dark text-uppercase align-middle" style="min-width: 75px">2026</span></td></tr></tbody></table></div><div class="col-xs-10 cl-sm-10 col-md-10 mt-2 mt-md-0"><h6 class="title font-weight-bold ml-1 ml-md-4"><a href="https://iclr.cc/virtual/2026/poster/10009592" target="_blank" rel="external nofollow noopener">FRIEDA: Benchmarking Multi-Step Cartographic Reasoning in Vision-Language Models</a></h6><h6 class="ml-1 ml-md-4" style="font-size: 0.95rem">ICLR 2026</h6></div></div></li>';
      cvPubs.prepend(cvFrieda).prepend(cvTrasa);
    }

    if($('.card-title').filter(function(){return $(this).text().trim()==='Service';}).length===0){
      var workAnchor=$('#work');
      var service='<a class="anchor" id="service"></a><div class="card mt-3 p-3"><h3 class="card-title font-weight-medium">Service</h3><div><ul class="card-text font-weight-light list-group list-group-flush"><li class="list-group-item"><div class="row"><div class="col-xs-2 cl-sm-2 col-md-2 text-center date-column"><span class="badge font-weight-bold danger-color-dark text-uppercase align-middle" style="min-width: 75px">2026</span></div><div class="col-xs-10 cl-sm-10 col-md-10 mt-2 mt-md-0"><h6 class="title font-weight-bold ml-1 ml-md-4">External Reviewer</h6><h6 class="ml-1 ml-md-4" style="font-size: 0.95rem">ACM SIGSPATIAL 2026 Applications Track</h6></div></div></li></ul></div></div>';
      if(workAnchor.length){workAnchor.before(service);}else{$('.cv').append(service);}
    }

    $('.cv').find('*').filter(function(){return $(this).children().length===0 && $(this).text().trim()==='Beginner';}).text('Intermediate');

    var title=$('.post-title').first();
    var pdfIcon=title.find('a[href="/assets/pdf/CV_FAANG.pdf"]');
    if(pdfIcon.length){pdfIcon.attr('href','https://docs.google.com/document/d/1_PbEPhMcy_ImRT284Wbx4m0WldGxpSvreag2lodb7f0/export?format=pdf').attr('title','Resume (PDF)').attr('aria-label','Resume PDF');}
    var header=$('.post-header').first();
    if(header.length){
      var desc=header.find('.post-description');
      if(desc.length===0){header.append('<p class="post-description"></p>');desc=header.find('.post-description');}
      desc.html('This page presents my academic CV. The PDF icon above opens my industry-focused <a href="https://docs.google.com/document/d/1_PbEPhMcy_ImRT284Wbx4m0WldGxpSvreag2lodb7f0/export?format=pdf" target="_blank" rel="external nofollow noopener">resume</a>.');
    }
  }

  if(path==='/projects/'||path==='/projects/index.html'){
    $('.projects .card-title').filter(function(){return $(this).text().indexOf('TRASA')!==-1;}).closest('.col').remove();
    var imola=$('a[href="/projects/imola/"]').find('.card-text').first();
    if(imola.length){imola.html('NSF-funded project building a national-scale historical road network database from USGS topographic maps, including topology-preserving road extraction and reconstruction within TRASA.');}
  }

  if(path.indexOf('/projects/imola/')===0){
    $('#my-role-imola, #outputs-imola, #collaborators-imola').remove();
    var impact=$('h2').filter(function(){return $(this).text().trim()==='Impact';}).first();
    var block='<section id="my-role-imola"><h2>My Role</h2><p>Within IMOLA, I develop <strong>TRASA</strong> as part of the project’s road-network extraction research. My work focuses on:</p><ul><li>combining graph-based line detection, segmentation guidance, and node-type classification for historical topographic maps;</li><li>converting line predictions into routable graph structures with node and edge classification and connectivity correction;</li><li>designing evaluation pipelines for geometric accuracy, topology preservation, structured error attribution, and cross-region generalization.</li></ul></section>'+
      '<section id="outputs-imola"><h2>Selected Publications &amp; Presentations</h2><ul><li><strong>TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps.</strong> Sofia Kirsanova, <a href="https://zekun-li.github.io/" target="_blank" rel="external nofollow noopener">Zekun Li</a>, <a href="https://www.colorado.edu/geography/stefan-leyk-0" target="_blank" rel="external nofollow noopener">Stefan Leyk</a>, <a href="https://www.isi.edu/directory/craig-knoblock/" target="_blank" rel="external nofollow noopener">Craig A. Knoblock</a>, and <a href="https://yaoyichi.github.io/" target="_blank" rel="external nofollow noopener">Yao-Yi Chiang</a>. Manuscript in preparation, 2026.</li><li><strong>TRASA poster presentation.</strong> <a href="https://sites.google.com/umn.edu/frontiers/home" target="_blank" rel="external nofollow noopener">Frontiers of Generative AI &amp; Science Workshop</a>, University of Minnesota, Aug 2026.</li></ul></section>'+
      '<section id="collaborators-imola"><h2>Project Links &amp; Collaborators</h2><p>IMOLA is led by <a href="https://yaoyichi.github.io/" target="_blank" rel="external nofollow noopener">Prof. Yao-Yi Chiang</a> at the University of Minnesota and <a href="https://www.colorado.edu/geography/stefan-leyk-0" target="_blank" rel="external nofollow noopener">Prof. Stefan Leyk</a> at the University of Colorado Boulder. TRASA collaborators also include <a href="https://zekun-li.github.io/" target="_blank" rel="external nofollow noopener">Zekun Li</a> and <a href="https://www.isi.edu/directory/craig-knoblock/" target="_blank" rel="external nofollow noopener">Prof. Craig A. Knoblock</a>. For questions about my work, contact me at <a href="mailto:kirsa002@umn.edu">kirsa002@umn.edu</a>.</p></section>';
    if(impact.length){impact.before(block);}else{$('article').append(block);}
  }

  if(path.indexOf('/projects/criticalmaas/')===0){
    $('#my-role-criticalmaas, #outputs-criticalmaas, #collaborators-criticalmaas').remove();
    var impactCritical=$('h2').filter(function(){return $(this).text().trim()==='Impact';}).first();
    var criticalBlock='<section id="my-role-criticalmaas"><h2>My Role</h2><p>My work focused on legend detection and map-layout understanding within the DIGMAPPER pipeline:</p><ul><li>developing methods to detect legend symbols and text regions and link them into structured legend items across diverse cartographic styles;</li><li>combining fine-tuned LayoutLMv3 with GPT-4o structured prompting for layout-aware legend parsing;</li><li>achieving 96% symbol-detection F1, 97.8% text-detection F1, and 97.1% symbol–description linking accuracy.</li></ul></section>'+
      '<section id="outputs-criticalmaas"><h2>Selected Publications</h2><ul><li><a href="https://arxiv.org/abs/2506.16006" target="_blank" rel="external nofollow noopener"><strong>DIGMAPPER: A Modular System for Automated Geologic Map Digitization</strong></a>. ACM SIGSPATIAL 2025 Industrial Track.</li><li><a href="https://doi.org/10.1145/3764920.3770590" target="_blank" rel="external nofollow noopener"><strong>Detecting Legend Items on Historical Maps Using GPT-4o with In-Context Learning</strong></a>. GeoSearch@ACM SIGSPATIAL 2025.</li></ul></section>'+
      '<section id="collaborators-criticalmaas"><h2>Project Links &amp; Collaborators</h2><p>This work was conducted in the <a href="https://knowledge-computing.github.io/" target="_blank" rel="external nofollow noopener">Knowledge Computing Lab</a> with <a href="https://yaoyichi.github.io/" target="_blank" rel="external nofollow noopener">Prof. Yao-Yi Chiang</a> and collaborators including <a href="https://www.isi.edu/directory/craig-knoblock/" target="_blank" rel="external nofollow noopener">Prof. Craig A. Knoblock</a>. For questions about my contribution, contact me at <a href="mailto:kirsa002@umn.edu">kirsa002@umn.edu</a>.</p></section>';
    if(impactCritical.length){impactCritical.before(criticalBlock);}else{$('article').append(criticalBlock);}
  }

  if(path.indexOf('/teaching/')===0){
    var mentoring=$('#mentoring');
    if(mentoring.length){
      mentoring.nextAll().remove();
      mentoring.after('<p>I mentor undergraduate students who want hands-on research experience in computer vision, geospatial AI, multimodal models, and automated map digitization.</p><p>Possible projects may include:</p><ul><li>dataset curation, annotation, and quality control for historical maps;</li><li>semantic segmentation and line-extraction experiments;</li><li>evaluation, visualization, and structured error analysis of model outputs;</li><li>geospatial preprocessing and conversion between raster, vector, and graph representations;</li><li>reproducing recent research methods and building small extensions or benchmarks.</li></ul><p>Students should be comfortable with Python and have completed at least one course in machine learning, computer vision, data science, or a closely related area. Prior research experience is not required.</p><p>To inquire, email <a href="mailto:kirsa002@umn.edu">kirsa002@umn.edu</a> with the subject <strong>Undergraduate Research Interest</strong> and include:</p><ul><li>a short introduction and the research topics that interest you;</li><li>your resume or CV;</li><li>relevant coursework and technical skills;</li><li>a GitHub profile or project portfolio, when available;</li><li>your expected weekly availability and the semester or time period when you hope to work.</li></ul>');
    }
  }
});

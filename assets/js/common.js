$(document).ready(function(){if($("a.abstract").click(function(){$(this).parent().parent().find(".abstract.hidden").toggleClass("open"),$(this).parent().parent().find(".award.hidden.open").toggleClass("open"),$(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open")}),$("a.award").click(function(){$(this).parent().parent().find(".abstract.hidden.open").toggleClass("open"),$(this).parent().parent().find(".award.hidden").toggleClass("open"),$(this).parent().parent().find(".bibtex.hidden.open").toggleClass("open")}),$("a.bibtex").click(function(){$(this).parent().parent().find(".abstract.hidden.open").toggleClass("open"),$(this).parent().parent().find(".award.hidden.open").toggleClass("open"),$(this).parent().parent().find(".bibtex.hidden").toggleClass("open")}),$("a").removeClass("waves-effect waves-light"),$("#toc-sidebar").length){$(".publications h2").each(function(){$(this).attr("data-toc-skip","")});var e="#toc-sidebar",t=$(e);Toc.init(t),$("body").scrollspy({target:e})}const n=document.createElement("link");n.href="../css/jupyter.css",n.rel="stylesheet",n.type="text/css";let a=determineComputedTheme();$(".jupyter-notebook-iframe-container iframe").each(function(){$(this).contents().find("head").append(n),"dark"==a&&$(this).bind("load",function(){$(this).contents().find("body").attr({"data-jp-theme-light":"false","data-jp-theme-name":"JupyterLab Dark"})})}),$('[data-toggle="popover"]').popover({trigger:"hover"})});
$(document).ready(function(){
  function hasText(s){return document.body && document.body.innerText.indexOf(s)!==-1;}
  function esc(s){return s;}
  var path=window.location.pathname;
  if(path==='/'||path==='/index.html'){
    if(!hasText('TRASA')){
      var bio=$('.clearfix').first();
      if(bio.length){
        bio.find('p').eq(1).html('My research focuses on geospatial AI, computer vision, document image analysis, and multimodal understanding of historical maps. I work on automated map digitization, with emphasis on legend extraction, line extraction, road network reconstruction, topology preservation, vision transformers, and layout understanding.');
        bio.find('p').eq(1).after('<p>I work on the NSF IMOLA project and previously worked on DARPA CriticalMAAS through the DIGMAPPER map-digitization pipeline. My current work includes <strong>TRASA</strong>, a topology-preserving road network extraction pipeline for historical topographic maps.</p>');
      }
      var tbl=$('.news table').first();
      if(tbl.length){
        tbl.prepend('<tr><th scope="row" style="width: 20%">Aug 2026</th><td>I will present <em>TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps</em> at the <a href="https://sites.google.com/umn.edu/frontiers/home" rel="external nofollow noopener" target="_blank">Frontiers of Generative AI &amp; Science Workshop</a> at the University of Minnesota.</td></tr>');
        tbl.prepend('<tr><th scope="row" style="width: 20%">May 2026</th><td>I was featured in <a href="https://cse.umn.edu/cs/news/cspotlight-mapping-past" rel="external nofollow noopener" target="_blank">CSpotlight: Mapping the Past</a>, a University of Minnesota Computer Science &amp; Engineering profile about my research on historical map analysis.</td></tr>');
        tbl.prepend('<tr><th scope="row" style="width: 20%">2026</th><td>Our paper <em>FRIEDA: Benchmarking Multi-Step Cartographic Reasoning in Vision-Language Models</em> appeared at ICLR 2026.</td></tr>');
      }
    }
  }
  if(path.indexOf('/publications/')===0){
    if(!hasText('TRASA: Topology-Preserving Road Network Extraction')){
      var pub=$('.publications').first();
      if(pub.length){
        pub.prepend('<h2 class="bibliography">2026</h2><ol class="bibliography"><li><div class="row"><div class="col col-sm-2 abbr"><abbr class="badge rounded w-100" style="background-color:#0076df">Manuscript</abbr></div><div id="trasa2026" class="col-sm-8"><div class="title">TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps</div><div class="author"> Sofia Kirsanova, Zekun Li, Stefan Leyk, Craig A. Knoblock, and Yao-Yi Chiang </div><div class="periodical"><em>Manuscript in preparation</em>, 2026</div></div></div></li><li><div class="row"><div class="col col-sm-2 abbr"><abbr class="badge rounded w-100" style="background-color:#0076df">ICLR</abbr></div><div id="frieda2026" class="col-sm-8"><div class="title">FRIEDA: Benchmarking Multi-Step Cartographic Reasoning in Vision-Language Models</div><div class="author"> Jihun Pyo, Yuxi Jiao, Daehan Jung, Zekun Li, Leeje Jang, Sofia Kirsanova, Jina Kim, Yijun Lin, Qian Liu, Jie Xie, Hooman Askari, Ning Xu, Muhao Chen, and Yao-Yi Chiang </div><div class="periodical"><em>International Conference on Learning Representations (ICLR)</em>, 2026</div></div></div></li><li><div class="row"><div class="col col-sm-2 abbr"><abbr class="badge rounded w-100" style="background-color:#00ab37">Poster</abbr></div><div id="frontiers2026" class="col-sm-8"><div class="title">TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps</div><div class="author"> Sofia Kirsanova, Zekun Li, Stefan Leyk, Craig A. Knoblock, and Yao-Yi Chiang </div><div class="periodical"><em><a href="https://sites.google.com/umn.edu/frontiers/home" target="_blank" rel="external nofollow noopener">Frontiers of Generative AI &amp; Science Workshop</a></em>, University of Minnesota, Minneapolis, MN, USA, Aug 2026</div><div class="periodical">Poster presentation</div></div></div></li></ol>');
      }
    }
  }
  if(path.indexOf('/cv/')===0){
    if(!hasText('External Reviewer, ACM SIGSPATIAL 2026 Applications Track')){
      var cv=$('.cv').first();
      if(cv.length){
        cv.find('.card').first().after('<div class="card mt-3 p-3"><h3 class="card-title font-weight-medium">2026 Updates</h3><div><ul class="card-text font-weight-light list-group list-group-flush"><li class="list-group-item"><strong>Project:</strong> TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps.</li><li class="list-group-item"><strong>Publication:</strong> FRIEDA: Benchmarking Multi-Step Cartographic Reasoning in Vision-Language Models, ICLR 2026.</li><li class="list-group-item"><strong>Manuscript:</strong> TRASA, manuscript in preparation, 2026. Authors: Sofia Kirsanova, Zekun Li, Stefan Leyk, Craig A. Knoblock, Yao-Yi Chiang.</li><li class="list-group-item"><strong>Presentation:</strong> TRASA poster, Frontiers of Generative AI &amp; Science Workshop, University of Minnesota, Aug 2026.</li><li class="list-group-item"><strong>Service:</strong> External Reviewer, ACM SIGSPATIAL 2026 Applications Track.</li><li class="list-group-item"><strong>Media coverage:</strong> <a href="https://cse.umn.edu/cs/news/cspotlight-mapping-past" target="_blank" rel="external nofollow noopener">CSpotlight: Mapping the Past</a>, University of Minnesota Computer Science &amp; Engineering, 2026.</li></ul></div></div>');
      }
    }
  }
  if(path.indexOf('/projects/')===0){
    if(!hasText('TRASA: Topology-Preserving Road Network Extraction')){
      var imola=$('a[href="/projects/imola/"]').find('.card-text').first();
      if(imola.length){imola.html('NSF-funded project on historical map understanding and topology-preserving road network extraction. Current work includes TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps.');}
      var projects=$('.projects .row').first();
      if(projects.length){projects.append('<div class="col"><div class="card h-100 hoverable"><div class="card-body"><h2 class="card-title">TRASA – Topology-Preserving Road Network Extraction</h2><p class="card-text">Ongoing IMOLA work on extracting routable road graphs from historical topographic maps using graph-based line detection, segmentation guidance, and node-type classification.</p></div></div></div>');}
    }
  }
});
$(document).ready(function(){
  var path=window.location.pathname;
  var venueUrl='https://sigspatial2026.sigspatial.org/applications-submission.html';
  var paperTitle='TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps';

  if(path==='/'||path==='/index.html'){
    var table=$('.news table').first();
    if(table.length){
      table.find('tr').filter(function(){
        var t=$(this).text();
        return t.indexOf(paperTitle)!==-1 && t.indexOf('accepted')!==-1 && t.indexOf('SIGSPATIAL 2026')!==-1;
      }).remove();
      table.prepend(
        '<tr><th scope="row" style="width:20%">Aug 2026</th><td>Our paper <em>'+paperTitle+'</em> was accepted to the <a href="'+venueUrl+'" target="_blank" rel="external nofollow noopener">Applications Track of ACM SIGSPATIAL 2026</a>! I’ll be presenting this work at SIGSPATIAL in Riverside this November. See you there!</td></tr>'
      );
    }
  }

  if(path.indexOf('/publications/')===0){
    var item=$('#trasa2026');
    if(item.length){
      var badge=item.closest('.row').find('.abbr abbr.badge').first();
      badge.attr('style','background-color:#1565c0!important;color:#fff!important');
      badge.html('<a href="'+venueUrl+'" target="_blank" rel="external nofollow noopener" style="color:#fff!important">SIGSPATIAL</a>');

      var title=item.find('.title').first();
      title.find('a').each(function(){$(this).replaceWith($(this).contents());});
      title.text(paperTitle);

      item.find('.periodical').first().html('<em>ACM SIGSPATIAL 2026, Applications Track</em>, Riverside, CA, USA, 2026');

      var bib='@inproceedings{kirsanova2026trasa,\n  title = {TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps},\n  author = {Kirsanova, Sofia and Li, Zekun and Leyk, Stefan and Knoblock, Craig A. and Chiang, Yao-Yi},\n  booktitle = {Proceedings of the 34th ACM International Conference on Advances in Geographic Information Systems},\n  address = {Riverside, CA, USA},\n  year = {2026},\n  note = {Applications Track}\n}';
      item.find('div.bibtex.hidden code').text(bib);
    }
  }
});
$(document).ready(function(){
  var path=window.location.pathname;
  var venueUrl='https://sigspatial2026.sigspatial.org/applications-submission.html';
  var paperTitle='TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps';
  var doiUrl='https://doi.org/10.1145/3841645.3843303';
  var codeUrl='https://github.com/knowledge-computing/TRASA';

  if(path==='/'||path==='/index.html'){
    var table=$('.news table').first();
    if(table.length){
      table.find('tr').filter(function(){
        var t=$(this).text();
        return t.indexOf(paperTitle)!==-1 && t.indexOf('accepted')!==-1 && t.indexOf('SIGSPATIAL 2026')!==-1;
      }).remove();
      var acceptanceRow = (
        '<tr><th scope="row" style="width:20%">Aug 2026</th><td>Our paper <em>'+paperTitle+'</em> was accepted to the <a href="'+venueUrl+'" target="_blank" rel="external nofollow noopener">Applications Track of ACM SIGSPATIAL 2026</a>! The paper was presented in Riverside in November 2026.</td></tr>'
      );
      var firstAug = table.find('tr').filter(function(){return $(this).text().indexOf('Frontiers of Generative AI')!==-1;}).first();
      if(firstAug.length){firstAug.before(acceptanceRow);}else{var first2025=table.find('th').filter(function(){return $(this).text().trim()==='Oct 01, 2025';}).first().closest('tr'); if(first2025.length){first2025.before(acceptanceRow);}else{table.append(acceptanceRow);}}
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
      title.html('<a href="'+doiUrl+'" target="_blank" rel="noopener noreferrer">'+paperTitle+'</a>');

      item.find('.periodical').first().html('<em>Proceedings of ACM SIGSPATIAL 2026, Applications Track</em>, Riverside, CA, USA, 2026');

      var bib='@inproceedings{kirsanova2026trasa,\n  title = {TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps},\n  author = {Kirsanova, Sofia and Li, Zekun and Leyk, Stefan and Knoblock, Craig A. and Chiang, Yao-Yi},\n  booktitle = {Proceedings of the 34th ACM International Conference on Advances in Geographic Information Systems},\n  address = {Riverside, CA, USA},\n  year = {2026},\n  note = {Applications Track},\n  doi = {10.1145/3841645.3843303},\n  url = {https://doi.org/10.1145/3841645.3843303}\n}';
      item.find('div.bibtex.hidden code').text(bib);
    }
  }
});
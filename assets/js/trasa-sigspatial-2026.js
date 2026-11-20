$(document).ready(function(){
  var path=window.location.pathname;
  var venueUrl='https://sigspatial2026.sigspatial.org/applications-submission.html';
  var paperTitle='TRASA: Topology-Preserving Road Network Extraction from Historical Topographic Maps';
  var doiUrl='https://doi.org/10.1145/3841645.3843303';
  var codeUrl='https://github.com/knowledge-computing/TRASA';

  // TRASA appeared at SIGSPATIAL 2026; do not reinsert old acceptance announcements.

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
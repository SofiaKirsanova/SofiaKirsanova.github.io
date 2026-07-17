$(document).ready(function(){
  var path=window.location.pathname;
  var nsfLogo='https://commons.wikimedia.org/wiki/Special:Redirect/file/National_Science_Foundation_(NSF)_Logo.svg';
  var darpaLogo='https://commons.wikimedia.org/wiki/Special:Redirect/file/Darpa-logo-2026.png';

  $('img[alt="NSF logo"]').attr('src',nsfLogo);
  $('img[alt="DARPA logo"]').attr('src',darpaLogo);

  if(path.indexOf('/cv/')===0){
    $('.post-description a').filter(function(){return $(this).text().indexOf('Industry Resume')!==-1;}).attr('href','/assets/pdf/CV_FAANG.pdf');
  }
});
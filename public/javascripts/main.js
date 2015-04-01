$(document).on('ready', function() {

// variables that may or may not be in use::::::::::
   var goodX = 'Macbooks';
   var goodY = '4Runners';

   var wayne = 'Wayne';
   var garth = 'Garth';

   var wayneX = 10;
   var wayneY = 5;

   var garthX = 8;
   var garthY = 2;

   var compAdvWayneX=false;
   var compAdvWayneY=false;

   var compAdvGarthX=false;
   var compAdvGarthY=false;

   var wayneLeastAccepted=0;

   var garthLeastAccepted=0;

   var postTradeTotalX=0;
   var postTradeTotalY=0;

   var greaterGoodX = 0;
   var greaterGoodY = 0;

   var fixedTotalX = 0;
   var fixedTotalY = 0;

   var postSpecTotalX = 0;
   var postSpecTotalY = 0;

   var tradeOffer = 0;
   var tradeRequest = 0;

   var counterOffer=0;
   var counterRequest=0;

   // fill with sample values::::::::
   // $('#sampleBtn').on('click', function(){
   


   //    everything();
   // });

   var everything = function(){

      // series of story-like console.logs::::::::::
      var autarkyConsBundle = function(){
         var printOutWayne = wayne + ' consumes ' + wayneX/2 + ' units of ' + goodX + ' and '+ wayneY/2 + ' of '+ goodY+' before trade. ';
         var printOutGarth = garth + ' consumes ' + garthX/2 + ' units of ' + goodX + ' and '+ garthY/2 + ' of '+ goodY + ' before trade. ';
         return printOutWayne + printOutGarth;
      };

      console.log(autarkyConsBundle());

      var opportunityCost = function(){
         var printOutWayne = wayne+' must give up '+ wayneX/wayneY + ' units of ' + goodY + ' to produce a unit of ' + goodX+'. It follows that '+wayne+' must give up '+wayneY/wayneX+' units of '+ goodY + ' to produce another unit of ' + goodX;
         var printOutGarth = garth +' must give up '+ garthX/garthY + ' units of ' + goodY + ' to produce a unit of ' + goodX+'. It follows that '+garth+' must give up '+garthY/garthX+' units of '+ goodY + ' to produce another unit of ' + goodX;
         return printOutWayne + printOutGarth;
      };

      console.log(opportunityCost());

      // Calculate who has a comp adv in which good
      var comparativeAdv = function(){
         if(wayneX/wayneY === garthX/garthY){
            // case of equivalent ratios::::::::
            if(wayneX>wayneY && wayneX>garthX) {
               var printOut = wayne+' can produce '+goodX + ' at the lowest cost and '+garth+' can produce '+ goodY+ ' at the lowest cost';
               compAdvWayneX=true; 
               compAdvGarthY=true;
               compAdvWayneY=false;
               compAdvGarthX=false;
               return printOut;
            }
            else if(wayneY>wayneX && wayneY>garthY){
               var printOut = garth+' can produce '+goodX + ' at the lowest cost and '+wayne+' can produce '+ goodY+ ' at the lowest cost';
               compAdvWayneY=true;
               compAdvGarthX=true;
               compAdvGarthY=false;
               compAdvWayneX=false;
               return printOut;
            }
            else if(garthX>garthY && garthX>wayneX){
               var printOut = garth+' can produce '+goodX + ' at the lowest cost and '+wayne+' can produce '+ goodY+ ' at the lowest cost';
               compAdvWayneY=true;
               compAdvGarthX=true;
               compAdvGarthY=false;
               compAdvWayneX=false;
               return printOut;
            }
            else if(garthY>garthX && garthY>wayneY){
               var printOut = wayne+' can produce '+goodX + ' at the lowest cost and '+garth+' can produce '+ goodY+ ' at the lowest cost';
               compAdvWayneX=true; 
               compAdvGarthY=true;
               compAdvGarthX=false;
               compAdvWayneY=false;
               return printOut;
            }
         }
         else if (wayneX/wayneY > garthX/garthY){
            var printOut = wayne+' can produce '+goodX + ' at the lowest cost and '+garth+' can produce '+ goodY+ ' at the lowest cost';
            compAdvWayneX=true; 
            compAdvGarthY=true;
            compAdvWayneY=false;
            compAdvGarthX=false;
            return printOut;
         }
         else{
            var printOut = garth+' can produce '+goodX + ' at the lowest cost and '+wayne+' can produce '+ goodY+ ' at the lowest cost';
            compAdvWayneY=true;
            compAdvGarthX=true;
            compAdvGarthY=false;
            compAdvWayneX=false;
            return printOut;
         }
      };
      console.log(comparativeAdv());

      // compare Totals
      var compareTotals=function(){
         if(compAdvWayneX){
            postTradeTotalX = wayneX;
            postSpecTotalX = wayneX;

            postTradeTotalY = garthY;
            postSpecTotalY = garthY;

            console.log('Wayne produces X: ', postSpecTotalX);
            console.log('Garth produces Y: ', postSpecTotalY);
         }
         else{
            postTradeTotalX = garthX;
            postSpecTotalX = garthX;

            postTradeTotalY = wayneY;
            postSpecTotalY = wayneY;

         }

         var printOut = 'The total amount of '+goodX+' in existence before trade was '+ (wayneX/2+garthX/2) +' units. After trade and specialization there are '+ postTradeTotalX +' in existence.';
         return printOut;
      };
      console.log(compareTotals());

      
      // Fix Totals if One is less than before:::::
      
      var postTradeTotalX = parseInt(postTradeTotalX);
      var postTradeTotalY = parseInt(postTradeTotalY);
      // console.log('pre if postTradeTotalX=', postTradeTotalX);
      // console.log('pre if postTradeTotalY=', postTradeTotalY);

         if(postTradeTotalX<(wayneX/2+garthX/2)){
            if(compAdvWayneX){   
               while (postTradeTotalX<wayneX/2+garthX/2){
                  postTradeTotalY = postTradeTotalY-0.5;
                  postTradeTotalX = (0.5*(garthX/garthY)) + postTradeTotalX;
                  // console.log('if postTradeTotalX=', postTradeTotalX);
                  // console.log('if postTradeTotalY=', postTradeTotalY);
               }
            }
            else{
               while(postTradeTotalX<wayneX/2+garthX/2){
                  postTradeTotalY = postTradeTotalY-0.5;
                  postTradeTotalX = (0.5*(wayneX/wayneY)) + postTradeTotalX;
                  // console.log('if postTradeTotalX=', postTradeTotalX);
                  // console.log('if postTradeTotalY=', postTradeTotalY);
               }
            }
         }
         if(postTradeTotalY<wayneY/2+garthY/2){
            if(compAdvWayneX){
               while(postTradeTotalY<wayneY/2+garthY/2){
                  postTradeTotalX=postTradeTotalX-0.5;
                  postTradeTotalY=(0.5*(wayneY/wayneX)) + postTradeTotalY;
                  // console.log('if postTradeTotalX=', postTradeTotalX);
                  // console.log('if postTradeTotalY=', postTradeTotalY);
               }
            }
            else{
               while(postTradeTotalY<wayneY/2+garthY/2){
                  postTradeTotalX=postTradeTotalX-0.5;
                  postTradeTotalY=(0.5*(garthY/garthX)) + postTradeTotalY;
                  // console.log('if postTradeTotalX=', postTradeTotalX);
                  // console.log('if postTradeTotalY=', postTradeTotalY);
               }
            }
         }

      // console.log('after if postTradeTotalX=', postTradeTotalX);
      // console.log('after if postTradeTotalY=', postTradeTotalY);
      // Terms of Trade:::::
      var termsOfTrade = function(){
         if(compAdvWayneX){
            wayneLeastAccepted = wayneX/wayneY;
            garthLeastAccepted = garthY/garthX;
            var printOut = 'The least amount of '+goodY+' that '+wayne+' will accept for one unit of his/her '+goodX+' is '+wayneLeastAccepted+'. The least amount of '+goodX+' that '+garth+' will accept for one unit of his/her '+goodY+' is '+garthLeastAccepted+'.';
            return printOut;
         }
         else{
            wayneLeastAccepted = wayneY/wayneX;
            garthLeastAccepted = garthX/garthY;
            var printOut = 'The least amount of '+goodY+' that '+garth+' will accept for one unit of his/her '+goodX+' is '+garthLeastAccepted+'. The least amount of '+goodX+' that '+wayne+' will accept for one unit of his/her '+goodY+' is '+wayneLeastAccepted+'.';
            return printOut;
         }
      };
      console.log(termsOfTrade());

      // append variables/sample case:::::::::::
      var introInfo = '<p>We live in a fictitious world with only two goods. They are ' +goodX+' and '+goodY+'. You can change which two goods are in this world by clicking on them in the table below. There are only two people; you, '+wayne+', and a potential trading partner, '+garth+'. (You can change these too)';

      $('.introSentence').html(introInfo);

      // MAIN TABLE
      $('#goodX').html(goodX);
      $('#goodY').html(goodY);
      $('#wayne').html(wayne);
      $('#goodXwayne').html(wayneX);
      $('#goodXwayneopCost').html('1 unit of '+goodX+' for ' +wayneY/wayneX+' of '+goodY);
      $('#goodYwayne').html(wayneY);
      $('#goodYwayneopCost').html('1 unit of '+goodY+' for ' +wayneX/wayneY+' of '+goodX);

      $('#garth').html(garth);
      $('#goodXgarth').html(garthX);
      $('#goodXgarthopCost').html('1 unit of '+goodX+' for ' +garthY/garthX+' of '+goodY);
      $('#goodYgarth').html(garthY);
      $('#goodYgarthopCost').html('1 unit of '+goodY+' for ' +garthX/garthY+' of '+goodX);

      
      // Table of Totals
      
      $('#totalXbefore').html(wayneX/2+garthX/2);
      $('#totalXafter').html(postTradeTotalX);
      $('#totalYbefore').html(wayneY/2+garthY/2);
      $('#totalYafter').html(postTradeTotalY);
      $('#totalXspecial').html(postSpecTotalX);
      $('#totalYspecial').html(postSpecTotalY);

      // append variables to classes
      $('.goodX').html(goodX);
      $('.goodY').html(goodY);
      $('.wayne').html(wayne);
      $('.garth').html(garth);
      $('.wayneXbefore').html(wayneX/2);
      $('.wayneYbefore').html(wayneY/2);
      $('.garthXbefore').html(garthX/2);
      $('.garthYbefore').html(garthY/2);

      // trade table
      $('#offer').html(tradeOffer);
      $('#request').html(tradeRequest);

      // Chartzzzzzzzzzzzzz

     $(function () {
         $('#chartEvery').highcharts({
             chart: {
                 type: 'column',
             },
             colors: ['#4BC72C', '#2F4761', '#90ed7d', '#f7a35c', '#8085e9', 
                '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],
             title: {
                 text: 'Before and After Trade'
             },
             subtitle: {
                 text: 'Demonstration of Comparative Advantage'
             },
             xAxis: {
                 categories: [
                     'Before Trade Totals',
                     'After Trade Totals',
                     ''+wayne+' Before Trade',
                     ''+garth +' Before Trade',
                     ''+wayne+' After Trade(disregard)',
                     ''+garth +'After Trade(disregard)'    
                 ]
             },
             yAxis: {
                 min: 0,
                 title: {
                     text: 'Units of the two Goods'
                 }
             },
             tooltip: {
                 headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                 pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                     '<td style="padding:0"><b>{point.y:.1f} units</b></td></tr>',
                 footerFormat: '</table>',
                 shared: true,
                 useHTML: true
             },
             plotOptions: {
                 column: {
                     pointPadding: 0.2,
                     borderWidth: 0
                 }
             },
             series: [{
                 name: goodX,
                 data: [wayneX/2+garthX/2, postTradeTotalX, wayneX/2, garthX/2, 2, 2]

             }, {
                 name: goodY,
                 data: [wayneY/2+garthY/2, postTradeTotalY, wayneY/2, garthY/2, 2, 2]

             }]
         });
     });

   };
   // This bracket closes everything();



// Edit in place javascript::::::
      var saveBtn ;
      var closeBtn ;
      var inputInfo ;
      var popoverHtml ;
      var popoverContent ;
      var popoverTitle ;

      $('.editable').hover(function(){
          // $(this).hide();
          
          // console.log($(this).popover);
          // 
          popoverContent = $('<div id="popoverContent"><input type="text"></div>');
          popoverTitle = $('<div id="popoverTitle">Enter a Value <button id="saveIt" class="btn btn-default">✓</button><button id="closeIt" class="btn btn-default">X</button></div>');

          $(this).popover({
                html: true,
                // container: this,
                trigger: 'click',
                content: function() {
                  // console.log(popoverContent);
                  return popoverContent.html();
                },
                title: function() {
                  return popoverTitle.html();
                }
          });
          // $(this).after(popoverHtml);
          // 
          // 
          // closeBtn = $('<button id="closeIt" class="btn btn-default">X</button>');
          // $(inputInfo).after(closeBtn);
          // saveBtn = $('<button id="saveIt" class="btn btn-default">✓</button>');
          // $(inputInfo).after(saveBtn);
          

         $('.editable').on('click', function(){
            $(this).closest('td').find('input').focus();
         });
         

      });

      $('body').on('click', '#closeIt', function(){

         $(this).parent().parent().popover('destroy');
         
      });


      $('body').on('click', '#saveIt', function(){
          
         // var userInput = $(this).siblings('textarea').val();
          // console.log(userInput);
          

          // set variables to their corresponding table elements:::::THERE ARE 8 IN TOTAL:::::::
         wayne = $('#wayne').parent().find('input').val() || $('#wayne').text();
         garth = $('#garth').parent().find('input').val() || $('#garth').text();

         goodX =$('#goodX').parent().find('input').val() || $('#goodX').text();
         goodY = $('#goodY').parent().find('input').val() || $('#goodY').text();

         wayneX=$('#goodXwayne').parent().find('input').val() || $('#goodXwayne').text();
         wayneY=$('#goodYwayne').parent().find('input').val() || $('#goodYwayne').text();

         garthX=$('#goodXgarth').parent().find('input').val() || $('#goodXgarth').text();
         garthY=$('#goodYgarth').parent().find('input').val() || $('#goodYgarth').text();

         tradeOffer=$('#offer').parent().find('input').val() || $('#tradeOffer').text();
         tradeRequest=$('#request').parent().find('input').val() || $('#tradeRequest').text();
         everything();

         $(this).parent().parent().popover('destroy');
         // $(this).parent().children('.info').remove();
         // $(this).parent().children('.editable').show();
         // $(this).parent().children('#closeIt').remove();
         // $(this).parent().children('#saveIt').remove();

      });



   everything();



      


});
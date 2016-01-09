
 $(document).ready(function(){
         
          $('input:checkbox').screwDefaultButtons({
             checked: "url(.//images/on.png)",
             unchecked: "url(.//images/of.png)",
             width: 20,
             height: 20
          });
    });
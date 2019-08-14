

        var valor = '';
        var flag = true;
        var primeiro_valor;
        var opt;
        var clicou_dnv = 0;
        var ponto = true;



    	function digitados(num){  
            

    		if (num != NaN) {

    	  	const s = document.querySelector(".screen");
    	  	s.innerText += num; 

            valor = s.innerText;
         	
         	} 

    	  
    	 }



  function sinal(op){

    		var segundo_valor;
        var s_operacao = op;
    		
    		if (s_operacao == '+') { 
                    
                    if (flag && clicou_dnv ==0){
                        	  primeiro_valor = Number(valor);
     			   		            flag = false;
                            opt = 'somar'
                		        document.getElementById('digi').innerText = '';
                		        clicou_dnv = 1;
                		

           			    } 
                     
                    else if(clicou_dnv == 1){

                     	        segundo_valor =Number(document.getElementById("digi").innerText);
                              document.getElementById('digi').innerText = segundo_valor + segundo_valor; 

                     
                    }
           			

        }

    		else if (s_operacao == '-') {

    				if (flag){

                  primeiro_valor = Number(valor);
     			   	    flag = false;
                  opt = 'subtrair'
                	document.getElementById('digi').innerText = '';
                	clicou_dnv = 1;
                		

           	} 
            
            else if(clicou_dnv == 1){

                      segundo_valor =Number(document.getElementById("digi").innerText);
                      document.getElementById('digi').innerText = segundo_valor - segundo_valor;
            }
						 
    		}

    		else if (s_operacao == 'x') {

    			        if (flag ){

                     primeiro_valor = Number(valor);
     			        	 flag = false;
                     opt = 'multiplicar'
                	   document.getElementById('digi').innerText = '';

           			  }  

           			  else if(clicou_dnv == 1){

                     	segundo_valor =Number(document.getElementById("digi").innerText);
                      document.getElementById('digi').innerText = segundo_valor * segundo_valor;
                  }
			
			}

    	else if (s_operacao == '÷') {

    			        if (flag ){

                     	primeiro_valor= Number(valor);
     			   		      flag = false;
                      opt = 'dividir'
                		  document.getElementById('digi').innerText = '';

           			  }  
                  else if(clicou_dnv == 1){

                     	segundo_valor =Number(document.getElementById("digi").innerText);
                      document.getElementById('digi').innerText = segundo_valor / segundo_valor;

                  }

    	}  


    	else if(s_operacao == '='){
        var resultado;

                
              if(flag ==false & opt == 'somar'){
                
                  segundo_valor =Number(document.getElementById("digi").innerText);
                  resultado =  primeiro_valor + segundo_valor;  
                  document.getElementById('digi').innerText = resultado;
              }

              else if (flag ==false & opt == 'subtrair'){ 

                    segundo_valor =Number(document.getElementById("digi").innerText);
                    resultado =  primeiro_valor - segundo_valor;  
                	  document.getElementById('digi').innerText = resultado;

              }

              else if (flag ==false & opt == 'multiplicar'){ 

                    segundo_valor =Number(document.getElementById("digi").innerText);
                    resultado =  primeiro_valor * segundo_valor;  
                	  document.getElementById('digi').innerText = resultado;

              }

              else if (flag ==false & opt == 'dividir'){ 
                      
                      segundo_valor =Number(document.getElementById("digi").innerText);
                      resultado =  primeiro_valor / segundo_valor;  
                	    document.getElementById('digi').innerText = resultado;

              }
    	}
  }   

   function apagar(){ 
              
      document.getElementById("digi").innerHTML = '' ;
      location.reload();
    			
  } 
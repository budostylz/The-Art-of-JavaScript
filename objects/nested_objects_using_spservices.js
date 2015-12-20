
				'use strict';
				var tracked_classes = {};

				/*
					tracked_classes{
	
						s1{
							c1 : [],
							c2 : []
						}

						s2{
							c1 : [],
							c2 : []
	
						}

						



					}




				*/
	
				
				


				$().SPServices({
					
							        operation: "GetListItems",
							        async: false,
							        listName: source_list,
							        CAMLViewFields: view_fields,
							        CAMLQuery: query,
							        completefunc: function (xData, status) {
							            	//alert(xData.responseXML.xml);
							            
							            	//1. create object to hold student and classes that needs to be taken
				    						
				    						$(xData.responseXML).SPFilterNode("z:row").each(function() {
							            
							            
							            	try{

							            				if(condition){//get student data
							            				

							            					//array to be use as property
							            					date_arr = [];
							            					date_arr.push(class_complete);
							            					date_arr.push(next_due);
							            					
							            					//create new object instance
							            					tracked_classes[student] = {};
							            					tracked_classes[student][_class] = date_arr;

							            					
															
							            				
							            				}
							            				else{//get class data
							            					

							            					//array to be use as property
							            					date_arr = [];
							            					date_arr.push(class_complete);
							            					date_arr.push(next_due);

							            					
							            					tracked_classes[student][_class] = date_arr;

							            				}
							            				
							            			
							            				
							            		
							            	
							            	}
							            	catch(err){
							            		console.log(err.name + ": " + err.message);
							            	
							            	}
							            		
							            });//end  $(xData.responseXML).SPFilterNode
				    						
				   
							            
							        }//end completefunc: function
							    });//end $().SPServices({

			    
			  
			    
			    














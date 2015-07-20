$(document).ready(function(){
				var tags = [ 

							"כאב ראש"

							,"כאב בטן"

							,"מיגרנה"

							,"התכווצות שרירים"

							,"הורדת חום"

							,"כאב שרירים"												

					];
// Setter
				

					$( "#autocomplete" ).autocomplete({

					      source: function( request, response ) {

					          var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );

					          response( $.grep( tags, function( item ){

					              return matcher.test( item );

					          }) );

					      },

					      select: function (event, ui) {

                                    location.href='herbals.html?problem='+ ui.item.value;
                          },
						   
						   messages: {
										noResults: '',
										results: function() {}
							},
							appendTo: '#menu-container'

					});

		});
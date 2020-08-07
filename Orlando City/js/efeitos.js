$(document).ready(function(){
			
			$("#logotipo").on("mouseover", function(){
				
				$("#banner h1").addClass("efeito");

			}).on("mouseout", function(){

				$("#banner h1"). removeClass("efeito");
			
			});

			$("#input-search").on("focus", function(){

				$("li.search").addClass("ativo");

			}).on("blur", function(){

				$("li.search").removeClass("ativo");
			});

			$(".owl-carousel").owlCarousel({
				loop:true,
				margin: 10,
				nav:true,
				navigationText: ["Anterior", "Próximo"],
				autoplay: true,
				autoplayTimeout: 2000,
				
			});

		});

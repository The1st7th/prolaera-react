const css = `

@font-face {
	font-family: source-sans-pro;
	url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

}
html {
	font-family: source-sans-pro, sans-serif;
}

.textMuted {
	color: #333333;
}

#subHeaderWrapper {
	padding-top: 20px;
	padding-bottom: 0px;
}

.innerHtmlStyles {
	margin-top: 10px;
}

.innerHtmlStyles p, .innerHtmlStyles ol, .innerHtmlStyles ul  {
	margin-top: 10px;
}

@media
only screen and (max-width: 768px)  {
	html {
		font-family: source-sans-pro, sans-serif;
	}
	.green{
		height: 100% ;
		padding: 14px 14px 14px 14px ;
		color: #FFFFFF;
		font-size: 10pt;
		width: 100%;
		text-decoration: none;
		border-radius: 3px;
		border-style: none;
		background-color:#72C02C;
		border-color:#72C02C;
	}

	.notgreen{
		height: 100% ;
		padding: 14px 14px 14px 14px ;
		color: #FFFFFF;
		font-size: 10pt;
		width: 100%;
		text-decoration: none;
		border-radius: 3px;
		border-style: none;
		background-color:#2F4050;
		border-color:#2F4050;
	}
	body{
		background-color: #F7F7F7;
		margin-left: auto;
		margin-right: auto;
	}

	

	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr {
		display: block;		
	}
	
	#courseCertificate {
		max-width: 100%;
	}

	.courseCertificate {
		width: 100%;
		margin: auto;
	}
	
	.emailHeader td {
		width: 100%;
	}

	.emailHeader td img {
		margin-left: auto;
		margin-right: auto;
	} 

	.emailFooter {
		width:500px
		color: #F7F7F7;
		margin-right: auto;
		margin-left: auto;
		font-size: 10pt;
	}

	.emailFooter td {
	
		color: #F7F7F7;
		margin-right: auto;
		margin-left: auto;
		font-size: 10pt;
		
	}

	.report td {
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee;
    	position: relative;
    	text-align: top;
	}

	.report td:before {
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 6px;
		left: 6px;
		width: 45%;
		padding-right: 10px;
		white-space: nowrap;
	}
	
	.customButton {
		height:10%;
	}
	#div1{
		text-align:center;
	}
	#one{
		
		position:relative;
		top:5px;
		paddingTop: 5px;
		height:23px;
		width:100px
	}
	#div2{
		text-align:center;
		padding-top:7px;
	}
}
	@media (min-width: 769px) {

		html{
			
			font-family: source-sans-pro, sans-serif;
		}
		body{
			background-color: #F7F7F7;
			margin-left: auto;
			margin-right: auto;
			max-width:55%;
			
		}
		/* Force table to not be like tables anymore */
		table, thead, tbody, th, td, tr {
			// display: block;		
		}

		#courseCertificate {
			max-width: 100%;
		}
		.courseCertificate {
			width: 100%;
			margin: auto;
		}
		
		.emailHeader td {
			
		}
	
		.emailHeader td img {
			margin-left: auto;
			margin-right: auto;
		} 
	
		.emailFooter {
			padding-top:10px;
			padding-bottom:10px;
			max-height:100px;
			width:100%;
			color: #F7F7F7;
			margin-right: auto;
			margin-left: auto;
			font-size: 10pt;
		}

		.emailFooter td {
			width:100%;
			color: #F7F7F7;
			margin-right: auto;
			margin-left: auto;
			font-size: 10pt;
			
		}

	
		.report td {
			/* Behave  like a "row" */
			border: none;
			border-bottom: 1px solid #eee;
			position: relative;
			text-align: top;
		}
	
		.report td:before {
			/* Now like a table header */
			position: absolute;
			/* Top/left values mimic padding */
			top: 6px;
			left: 6px;
			width: 45%;
			padding-right: 10px;
			white-space: nowrap;
		}
	
		.green {
			height: 100%;
			padding: 14px 14px 14px 14px;
			color: #FFFFFF;
			font-size: 10pt;
			width: 100%;
			text-decoration: none;
			border-radius: 3px;
			border-style: none;
			background-color:#72C02C;
			border-color:#72C02C;
	  }
	  .notgreen {
		height: 100%;
		padding: 14px 14px 14px 14px;
		color: #FFFFFF;
		font-size: 10pt;
		width: 100%;
		text-decoration: none;
		border-radius: 3px;
		border-style: none;
		background-color:#2F4050;
		border-color:#2F4050;
  }
    #div1 {
		float:left;
		margin-left:5%;
	}
	#span1{
		float:left;
		padding:10px 5px 10px 10px;
	}
	#div2{
		text-align:right;
		padding:10px 10px 10px 10px;
		margin-left:5%
	}
	#one{
		paddingTop: 5px;
		height:23px;
		width:100px;
		position:relative;
		top:5px;
	}
	#footerId{
		padding-top:20px;
		padding-bottom:0px;
	}
	
/*End of media query*/
}


	
	`.trim();

export default css;

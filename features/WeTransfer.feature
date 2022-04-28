Feature: WeTransfer upload and download

	Scenario Outline: Log in with a free account
		Given I am on the login page
		When I login using: <username> and <password>
		Then I am redirected to the main page
		And I accept cookies and ToS
		
		Examples:
			| username 					| password             |
			| dam.ien.lav.is@gmail.com	| This^Is^My^Password! |

	Scenario Outline: As a user with a free account I can upload a file with an email transfer 
		When I upload: <file> to <emailTo>
	# 	Then the Transfer button becomes active
	# 	When I click on the Transfer button
	# 	Then <file> is uploaded
	
	 	Examples:
	 		  | file 			| emailTo             			| title		   | message
	 		  | image.jpg		| da.mi.en.la.vi.s@gmail.com	| 			   | 
	# 		  | document.pdf	| dami.enla.vis@gmail.com		| lorem ipsum  |
	#		  | image.jpg		| invalidEmailAddress			|			   | Lorem ipsum dolor sit amet ...
	#		  | 2GBfile.file	| damienlavis+test@gmail.com	| lorem ipsum  | Lorem ipsum dolor sit amet ... 
	#		  | 2.1GBfile.file  | damienlavis+test@gmail.com	|			   | 
			  
	# Scenario Outline: As a user with a free account I can download a file from an email transfer
	#	Given I have previously uploaded a <file>
	# 	When I download <file>
	# 	Then the file is saved to my local filesystem
		
	# 	Examples:
	# 		  | file 			| title			| message
	# 		  | image.jpg		|  			  	| 
	# 		  | document.pdf	| lorem ipsum	|
	#		  | 2GBfile.file	| lorem ipsum  	| Lorem ipsum dolor sit amet ...

	# Scenario Outline: As a user with a free account I can upload multiple files with an email transfer	

	# Scenario Outline: As a user with a free account I can download multiple files from an email transfer

	# Scenario Outline: As a user with a free account I can upload a folder of files with an email transfer

	# Scenario Outline: As a user with a free account I can upload a file with a transfer link

	# Scenario Outline: As a user with a free account I can upload multiple files with a transfer link	

	# Scenario Outline: As a user with a free account I can upload a folder of files with a transfer link

	# Scenario Outline: As a user with a free account I can download a file from a transfer link

	# Scenario Outline: As a user with a free account I can download multiple files from a transfer link	
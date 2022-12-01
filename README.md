# Csii-Helper

This library services will help you to deal with the regular use functions.

## Instalation

```npm i csii-helper```

## Usage
Fist import it in the relevent Module
```

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CsiiHelperModule
  ],

```


Inject the needed service in the constructor and call for the required function.
```
import { CsiiHelperService } from 'csii-helper';

```
```
constructor(private helper: CsiiHelperService){
  }
```
after injection call the function

```
 ngOnInit(): void {
	const description = this.helper.changeToTitleCase('i love angular');
	console.log(description);
	
	// it will return =>  'I Love Angular';
  }
```


## Functions

|   function        						| number of arguments |    argument   				|     returns   																				|   service    						|
| -------------                 | ------------- 			| ------------- 				|------------- 																					| ------------- 					|
| numberOfdaysFromCurrentDate   | 1  									| date						  		| number (eg: 4)  																			|  CsiiDateHelperService  |
| calculateDaysBetweenDates     | 2  									| Date1 , Date 2  			| number (eg: 7)  																			|  CsiiDateHelperService  |
| dateDifferenceString     			| 2 								  | startDate , endDate 	| number (eg: 3 Years 4 months 7 days)  								|  CsiiDateHelperService  |
| isPastDate					     			| 1									  | date								 	| boolean (eg: true)  																	|  CsiiDateHelperService  |
| isFutureDate					   			| 1									  | date								 	| boolean (eg: false)  																	|  CsiiDateHelperService  |
| isEmpty								   			| 1									  | any									 	| boolean (eg: true if empty)  													|  CsiiHelperService		  |
| validateEmail					   			| 1									  | string							 	| boolean (eg: true if email is valid)									|  CsiiHelperService		  |
| disableSpaceBar				   			| 1									  | KeyboardEvent				 	| boolean (eg: true)          													|  CsiiHelperService		  |
| isValidNumber					   			| 1									  | any									 	| boolean (eg: true)          													|  CsiiHelperService		  |
| validate10DigitNumberRegex		| 1									  | any									 	| boolean (eg: true)          													|  CsiiHelperService		  |
| calculatePercentage						| 3									  | number, total, toFixedValue(optional)	| boolean (eg: true)          					|  CsiiHelperService		  |
| formatBytes										| 1									  | number (bytes)			 	| string (eg: 21.5kb or 1.2Mb)    											|  CsiiHelperService		  |
| changeToSentenceCase					| 1									  | string, 							| string (eg: Hello world. Its ok.)   	       					|  CsiiHelperService		  |
| changeToTitleCase							| 1									  | string								| string (Convert First Letter Capital)									|  CsiiHelperService		  |
| changeToLowerCase							| 1									  | string								| string (convert to small letter)											|  CsiiHelperService		  |
| validateNumberLength					| 2									  | number, limit					| boolean (return true if limit matches number length)	|  CsiiHelperService		  |
| countWordsInString					| 1									  | string					| number (e.g 35)	|  CsiiHelperService		  |
| removeDuplicateArray					|2									  | array, key(that has duplicates)					| it will return array with unique values	|  CsiiHelperService		  |



| angular version  | package version |
| ------------- | ------------- |
| angular 14  | 0.0.5  |
| angular 13  | 0.0.3  |



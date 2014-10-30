#!/usr/bin/env node

/*
 * Copyright (C) 2010-2014 by Revolution Analytics Inc.
 *
 * This program is licensed to you under the terms of Version 2.0 of the
 * Apache License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * Apache License 2.0 (http://www.apache.org/licenses/LICENSE-2.0) for more 
 * details.
 */

/*
 * usage: $ node rinputs.js
 *
 * DeployR request to run a repository managed rscript passing all possible
 * `RInput` types.
 *
 * Supported RInputs:
 * ----------------------------------------------------------------------------
 * .numeric(name, value)
 * .logical(name, value)
 * .date(name, value)
 * .posixct(name, value)
 * .numericVector(name, value)
 * .integerVector(name, value)
 * .logicalVector(name, value)
 * .characterVector(name, value)
 * .dateVector(name, value)
 * .posixctVector(name, value)
 * .factor(name, value, levels, labels)
 * .ordered(name, value, levels, labels) 
 * .numericMatrix(name, value)
 * .integerMatrix(name, value)
 * .logicalMatrix(name, value)
 * .characterMatrix(name, value)
 * .list(name, value)
 * .dataframe(name, value)
 * 
 * ~~~ Examples ~~~
 *
 * ------------------------------------------------------------- 
 *  .character('x_character', 'c')
 * -------------------------------------------------------------      
 *   "x_character": {
 *       "type": "primitive",
 *       "value": "c"
 *   }
 *
 * ------------------------------------------------------------- 
 * .integer('x_integer', 10)
 * ------------------------------------------------------------- 
 *   "x_integer": {
 *      "type": "primitive",
 *      "value": 10
 *   }
 *
 * ------------------------------------------------------------- 
 * .numeric('x_double', 5.5)
 * ------------------------------------------------------------- 
 *   "x_double": {
 *       "type": "primitive",
 *       "value": 5.5
 *   }
 *
 * -------------------------------------------------------------  
 * .logical('x_double', 5.5)
 * ------------------------------------------------------------- 
 *   "x_logical": {
 *       "type": "primitive",
 *       "value": true
 *   }
 *
 * ------------------------------------------------------------- 
 * .date('x_date', new Date())
 * -------------------------------------------------------------     
 *   "x_date": {
 *       "type": "date",
 *       "value": "2011-10-04",
 *       "format": "yyyy-MM-dd"
 *   }
 *
 * -------------------------------------------------------------  
 * .posixct('x_posixct', new Date())
 * -------------------------------------------------------------   
 *   "x_posixct": {
 *       "type": "date",
 *       "value": "2011-10-05 12:13:14 -0800",
 *       "format": "yyyy-MM-dd HH:mm:ss Z"
 *   }
 *
 * ------------------------------------------------------------- 
 * .characterVector('x_character_vector', ['a', 'b', 'c'])
 * ------------------------------------------------------------- 
 *   "x_character_vector": {
 *       "type": "vector",
 *       "value": [
 *           "a",
 *           "b",
 *           "c"
 *       ]
 *   }
 *
 * ------------------------------------------------------------- 
 * .integerVector('x_integer_vector', [10, 11, 12]) 
 * -------------------------------------------------------------      
 *   "x_integer_vector": {
 *       "type": "vector",
 *       "value": [
 *           10,
 *           11,
 *           12
 *       ]
 *   }
 *
 * ------------------------------------------------------------- 
 * .integerVector('x_numeric_vector', [10.1, 11.1, 12.1]) 
 * -------------------------------------------------------------     
 *   "x_numeric_vector": {
 *       "type": "vector",
 *       "value": [
 *           10.1,
 *           11.1,
 *           12.1
 *       ]
 *   }
 *
 * ------------------------------------------------------------- 
 * .matrix('x_matrix', [ [1, 3, 12], [2, 11, 12] ])
 * -------------------------------------------------------------      
 *   "x_matrix": {
 *       "type": "matrix",
 *       "value": [
 *           [
 *               1,
 *               3,
 *               12
 *           ],
 *           [
 *               2,
 *               11,
 *               13
 *           ]
 *       ]
 *   }
 *
 * -------------------------------------------------------------  
 * .ordered('x_ordered_factor', 
 *         [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
 *         ['s', 't', 'a', 't', 'i', 's', 't', 'i', 'c', 's' ],
 *         ['s', 't', 'a', 't', 'i', 's', 't', 'i', 'c', 's' ]
 * -------------------------------------------------------------      
 *   "x_ordered_factor": {
 *       "type": "factor",
 *       "ordered": true,
 *       "value": [ 
 *           1,
 *           2,
 *           3,
 *           4,
 *           5,
 *           6,
 *           7,
 *           8,
 *           9,
 *           10
 *       ],
 *       "labels": [ 
 *           "s",
 *           "t",
 *           "a",
 *           "t",
 *           "i",
 *           "s",
 *           "t",
 *           "i",
 *           "c",
 *           "s"
 *       ],        
 *       "levels": [
 *           "s",
 *           "t",
 *           "a",
 *           "t",
 *           "i",
 *           "s",
 *            "t",
 *           "i",
 *           "c",
 *           "s"
 *       ]
 *   }
 *
 * -------------------------------------------------------------  
 * .factor('x_unordered_factor', 
 *         [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
 *         ['s', 't', 'a', 't', 'i', 's', 't', 'i', 'c', 's' ],
 *         ['s', 't', 'a', 't', 'i', 's', 't', 'i', 'c', 's' ]
 * -------------------------------------------------------------      
 *   "x_unordered_factor": {
 *       "type": "factor",
 *       "ordered": false,
 *       "value": [ 
 *           1,
 *           2,
 *           3,
 *           4,
 *           5,
 *           6,
 *           7,
 *           8,
 *           9,
 *           10
 *       ],
 *       "labels": [ 
 *           "s",
 *           "t",
 *           "a",
 *           "t",
 *           "i",
 *           "s",
 *           "t",
 *           "i",
 *           "c",
 *           "s"
 *       ],        
 *       "levels": [
 *           "s",
 *           "t",
 *           "a",
 *           "t",
 *           "i",
 *           "s",
 *            "t",
 *           "i",
 *           "c",
 *           "s"
 *       ]
 * 
 * -------------------------------------------------------------      
 * .list('x_list', [ 
 *    deplor.RInput.integerVector('first', [10, 11, 12]),
 *    deplor.RInput.integerVector('second', [40, 41, 42])
 * ])
 * -------------------------------------------------------------           
 *   "x_list": {
 *       "type": "list",
 *       "value": [
 *           {
 *               "name": "first",
 *               "value": [
 *                   10,
 *                   11,
 *                   12
 *               ],
 *               "type": "vector"
 *           },
 *           {
 *               "name": "second",
 *               "value": [
 *                   40,
 *                   41,
 *                   42
 *               ],
 *               "type": "vector"
 *           }
 *       ]
 *   }
 *
 * -------------------------------------------------------------  
 * .dataframe('x_dataframe', [ 
 *    deplor.RInput.integerVector('first', [10, 11, 12]),
 *    deplor.RInput.integerVector('second', [40, 41, 42])
 * ]) 
 * -------------------------------------------------------------        
 *   "x_dataframe": {
 *       "type": "dataframe",
 *       "value": [
 *           {
 *               "name": "first",
 *               "value": [
 *                   10,
 *                   11,
 *                   12
 *               ],
 *               "type": "vector"
 *           },
 *           {
 *               "name": "second",
 *               "value": [
 *                   40,
 *                   41,
 *                   42
 *               ],
 *               "type": "vector"
 *           }
 *       ]
 *   }
 *
 * -------------------------------------------------------------------- 
 */

var deployr = require('../../deployr'),
    config  = require('../config'),
    RInput  = deployr.RInput; // alias

deployr.configure( { logging: true, host: config.endpoint })
  .io('/r/repository/script/execute')	
  .data({ filename : 'DeployR - Hello World.R', author: 'testuser' })
  // ==========================================================================  
  // Pass [All] possible R Data Types to deployR (JavaScript --to-- R)
  // ==========================================================================  
  .numeric('input_numeric', 5)  
  .integer('input_integer', 1)
  .logical('input_logical', true)
  .character('input_character', 'Hello')
  .date('input_date', new Date())
  .posixct('input_posixct', new Date())
  .numericVector('input_numericVector', [1.1, 2.1, 3.1, 4.1, 5.1])
  .integerVector('input_integerVector', [1, 2, 3, 4, 5])
  .logicalVector('input_logicalVector', [true, false, true, true])
  .characterVector('input_characterVector', ['Hello', 'how', 'are', 'you?'])
  .dateVector('input_dateVector', [new Date(), new Date(), new Date()])
  .posixctVector('input_posixctVector', [new Date(), new Date(), new Date()])  
  .factor('input_factor', [1,2,3], [4,5,6], ['a', 'b' , 'c'])
  .ordered('input_orderedfactor', [1,2,3], [4,5,6], ['a', 'b' , 'c'])   
  .numericMatrix('input_numericMatrix', [ [1.1, 2.1, 3.1, 4.1, 5.1] ])
  .integerMatrix('input_integerMatrix', [ [1, 2, 3, 4, 5] ])
  .logicalMatrix('input_logicalMatrix', [ [true, false, true, true] ])
  .characterMatrix('input_characterMatrix', [ ['Hello', 'how', 'are', 'you?'] ])  
  .list('input_list', [
    RInput.numericVector('first', [10, 11, 12]),
    RInput.integer('input_l_integer', 1),
    RInput.logical('input_l_logical', true),
    RInput.character('input_l_character', 'Hello'),
    RInput.date('input_l_date', new Date()),
    RInput.posixct('input_l_posixct', new Date()),
    RInput.numericVector('input_l_numericVector', [1.1, 2.1, 3.1, 4.1, 5.1]),
    RInput.integerVector('input_l_integerVector', [1, 2, 3, 4, 5]),
    RInput.logicalVector('input_l_logicalVector', [true, false, true, true]),
    RInput.characterVector('input_l_characterVector', ['Hello', 'how', 'are', 'you?']),
    RInput.dateVector('input_l_dateVector', [new Date(), new Date(), new Date()]),
    RInput.posixctVector('input_posixctVector', [new Date(), new Date(), new Date()]),
    RInput.factor('input_l_factor', [1,2,3], [4,5,6], ['a', 'b' , 'c']),
    RInput.ordered('input_l_orderedfactor', [1,2,3], [4,5,6], ['a', 'b' , 'c']),  
    RInput.numericMatrix('input_l_numericMatrix', [ [1.1, 2.1, 3.1, 4.1, 5.1] ]),
    RInput.integerMatrix('input_l_integerMatrix', [ [1, 2, 3, 4, 5] ]),
    RInput.logicalMatrix('input_l_logicalMatrix', [ [true, false, true, true] ]),
    RInput.characterMatrix('input_characterMatrix', [ ['Hello', 'how', 'are', 'you?'] ])  
  ])
  .dataframe('input_dataframe', [
    RInput.integer('input_df_integer', 1),
    RInput.logical('input_df_logical', true),
    RInput.character('input_df_character', 'Hello'),
    RInput.date('input_df_date', new Date()),
    RInput.posixct('input_df_posixct', new Date()),
    RInput.numericVector('input_df_numericVector', [1.1, 2.1, 3.1, 4.1, 5.1]),
    RInput.integerVector('input_df_integerVector', [1, 2, 3, 4, 5]),
    RInput.logicalVector('input_df_logicalVector', [true, false, true, true]),
    RInput.characterVector('input_df_characterVector', ['Hello', 'how', 'are', 'you?']),
    RInput.dateVector('input_df_dateVector', [new Date(), new Date(), new Date()]),
    RInput.posixctVector('input_df_posixctVector', [new Date(), new Date(), new Date()]),    
    RInput.factor('input_df_factor', [1,2,3], [4,5,6], ['a', 'b' , 'c']),
    RInput.ordered('input_df_orderedfactor', [1,2,3], [4,5,6], ['a', 'b' , 'c']),
    RInput.numericMatrix('input_df_numericMatrix', [ [1.1, 2.1, 3.1, 4.1, 5.1] ]),
    RInput.integerMatrix('input_df_integerMatrix', [ [1, 2, 3, 4, 5] ]),
    RInput.logicalMatrix('input_df_logicalMatrix', [ [true, false, true, true] ]),
    RInput.characterMatrix('input_df_characterMatrix', [ ['Hello', 'how', 'are', 'you?'] ])
  ])
  .error(function(err) {
  	console.log(err);
  })
  .end(function(res, chain) {
  	console.log(res);
  });

/*****************************************************************************/
/*****************************************************************************/
/*****************************************************************************/

/* 
 * An alternative is to use  `.rinputs([])` and queue them up first. Both 
 * approaches are equivalent.
 */
var rinputs = [
	RInput.numeric('input_numeric', 5), 
	RInput.logical('input_logical', true)
];

deployr.io('/r/repository/script/execute')	
  .data({ filename : 'DeployR - Hello World.R', author: 'testuser' })  
  .rinputs(rinputs)
  .error(function(err) {
  	console.log(err);
  })
  .end(function(res, chain) {
  	console.log(res);
  });
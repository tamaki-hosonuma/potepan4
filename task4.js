'use strict';


function update( clear ) 
    {
        document.querySelector( 'input' ).value = clear;
    }

function append( _value )
    {
        document.querySelector( 'input' ).value += _value;
    }

function calc() 
    {
        const v = document.querySelector( 'input' ).value;
        try {
            const f = new Function( 'return ' + v )
            update( f().toString() );
        } catch( _error ) {
            update( _error ) ;
        }
    }

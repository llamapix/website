let mintAmount = 3;

function
changeMintAmount( changeAmount )
{
    mintAmount += changeAmount;
    if( mintAmount < 1 )
    {
        mintAmount = 1;
    }
    if( mintAmount > 10 )
    {
        mintAmount = 10;
    }

   document.getElementById( "button-amount" ).innerHTML = mintAmount;
}

console.log( document.getElementById( "button-amount-decrease" ) );
document.getElementById( "button-amount-decrease" ).addEventListener(
    "click",
    () =>
    {
        changeMintAmount( -1 );
        console.log( mintAmount );
    }
)

document.getElementById( "button-amount-increase" ).addEventListener(
    "click",
    () =>
    {
        changeMintAmount( 1 );
        console.log( mintAmount );
    }
)
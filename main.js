var HEIGHT= 6;
var WIDTH= 7;
var board;
var whoisplaying;//0 for red 1 for yellow
function generate_table_html(height, width) {
    result = "";
    for (var i = 0; i < height; i++) {
        result += "<tr>\n"; // row open tag. + is used to concatenate strings.
        for (var j = 0; j < width; j++) {
            // The "replace" is a string method. It takes as an argument a regular expression (read more online).
            // /row/g means - replace ALL occurrences of the word row (g stands for global).
            // This is used to create proper unique ids and unique handle_click parameters for each cell
            cell_td_tag = "<td id=\"cell_row_col\" onclick=\"handle_click(col)\"></td>\n".replace(/row/g, i).replace(/col/g, j);
            result += cell_td_tag;
        }
        result += "<\tr>\n" // row closing tag
    }
    return result;
}

function init_board(height,width)
{
    board=[];
    for(var i=0;i<height;i++)
    {
        board.push([]);
        for(var j=0;j<width;j++)
        {
            board[i].push(0);
        }
    }
    /*var ret= ""
    for(var i=0;i<height;i++)
    {
        for(var j=0;j<width;j++)
        {
            ret+= board[i][j].toString();
        }
    }
    alert(ret);*/
}

function handle_click(j)
{
    var i=0;
    //searching for the lowermost cell without a disc
    for(;i<HEIGHT; i++)
    {
        if(board[i][j]!=0) break;
    }
    i--;
    if(i==-1) 
    {
        alert("this row is full!")
        if(whoisplaying==0) whoisplaying=1;
        if(whoisplaying==1) whoisplaying=0;
        return;
    }
    
    
    
    $("#cell_row_col".replace("row",i).replace("col",j)).addClass(determinecolor());

    board[i][j]=whoisplaying+1;
    //switches players
    whoisplaying=1-whoisplaying;
}

function determinecolor()
{
    if(whoisplaying==0) return "yellowdisc";
    if(whoisplaying==1) return "reddisc";
}

// This means: when the document is ready, run the code inside the block
$(document).ready(function () {

    var tableContents = generate_table_html(HEIGHT, WIDTH);
    init_board(HEIGHT, WIDTH);
    //currentPlayer = PLAYER1;
    whoisplaying=0;
    $("#gameTable").html(tableContents); // Set the html of the object whose id is gameTable to variable tableContents

});


function fetchActors(res){
    var options = {
       sql : 'SELECT UserName FROM USER'
    }
    executeQuery(options, function(result){
    res.write("<table>");
    res.write("<tr>");
    for(var column in result[0]){
        res.write("<td><label>" + column + "</label></td>");
    }
    res.write("</tr>");
    for(var row in result){
        res.write("<tr>");
        for(var column in result[row]){
            res.write("<td><label>" + result[row][column] + "</label></td>");       
        }
        res.write("</tr>");         
    }
    res.write("</table>");
});
}
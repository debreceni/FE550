
	

	
	function multiCsv(files, callback) {
	  var results = [];
	  var error = "";
	  var filesLength = (files || []).length;
	  var callbackInvoked = false;
	  for (var i = 0; i < filesLength; i++) {
		(function(url) {
		  d3.csv(url, function(data) {
			if (data === null) {
			  error += "Error retrieving \"" + url + "\"\n";
			} else {
			  results.push(data);
			}
			// all files retrieved or an error occurred
			if (!callbackInvoked && (error || results.length === filesLength)) {
			  if (error) {
				callback(error, null); // might want to send partial results here
			  } else {
				callback(null, d3.merge(results));
			  }
			  callbackInvoked = true;
			}
		  });
		})(files[i]);
	  }
	}
	var infiles = [
		"/FE550/chess_top_100/fide.table.217.csv",
		"/FE550/chess_top_100/fide.table.221.csv",
		"/FE550/chess_top_100/fide.table.225.csv",
		"/FE550/chess_top_100/fide.table.229.csv",
		"/FE550/chess_top_100/fide.table.233.csv",
		"/FE550/chess_top_100/fide.table.237.csv",
		"/FE550/chess_top_100/fide.table.241.csv",
		"/FE550/chess_top_100/fide.table.245.csv",
		"/FE550/chess_top_100/fide.table.249.csv",
		"/FE550/chess_top_100/fide.table.253.csv",
		"/FE550/chess_top_100/fide.table.257.csv",
		"/FE550/chess_top_100/fide.table.261.csv",
		"/FE550/chess_top_100/fide.table.265.csv",
		"/FE550/chess_top_100/fide.table.269.csv",
		"/FE550/chess_top_100/fide.table.273.csv",
		"/FE550/chess_top_100/fide.table.277.csv",
		"/FE550/chess_top_100/fide.table.281.csv",
		"/FE550/chess_top_100/fide.table.285.csv",
		"/FE550/chess_top_100/fide.table.289.csv",
		"/FE550/chess_top_100/fide.table.293.csv",
		"/FE550/chess_top_100/fide.table.297.csv",
		"/FE550/chess_top_100/fide.table.301.csv",
		"/FE550/chess_top_100/fide.table.305.csv",
		"/FE550/chess_top_100/fide.table.309.csv",
		"/FE550/chess_top_100/fide.table.313.csv",
		"/FE550/chess_top_100/fide.table.317.csv",
		"/FE550/chess_top_100/fide.table.321.csv",
		"/FE550/chess_top_100/fide.table.325.csv",
		"/FE550/chess_top_100/fide.table.329.csv",
		"/FE550/chess_top_100/fide.table.333.csv",
		"/FE550/chess_top_100/fide.table.337.csv",
		"/FE550/chess_top_100/fide.table.341.csv",
		"/FE550/chess_top_100/fide.table.345.csv",
		"/FE550/chess_top_100/fide.table.349.csv",
		"/FE550/chess_top_100/fide.table.353.csv",
		"/FE550/chess_top_100/fide.table.357.csv",
		"/FE550/chess_top_100/fide.table.361.csv",
		"/FE550/chess_top_100/fide.table.365.csv",
		"/FE550/chess_top_100/fide.table.369.csv",
		"/FE550/chess_top_100/fide.table.373.csv",
		"/FE550/chess_top_100/fide.table.377.csv",
		"/FE550/chess_top_100/fide.table.381.csv",
		"/FE550/chess_top_100/fide.table.385.csv",
		"/FE550/chess_top_100/fide.table.389.csv",
		"/FE550/chess_top_100/fide.table.393.csv",
		"/FE550/chess_top_100/fide.table.397.csv"]
		
		
	
	   
	multiCsv(infiles, function (err, results) {
	  if (err) {
		alert(err);
		return;
	  }
	//data cleaning  Remove comma from name when present
		var resultsnew = _.map(results, function(e) { return {BYear:e["B-Year"], Country:e.Country, Name: e.Name.replace(/\,/g,""),
							       Rank: e.Rank, Rating:e.Rating, Games:e.Games}});
		
	cntrChart(resultsnew);
	rankChart(resultsnew);
	rankbybyear(resultsnew);
		rankbygames(resultsnew);
});
	

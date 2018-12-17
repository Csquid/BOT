const fs = require("fs");

exports.write = function(message) {
    fs.open("test.txt", "a+", function(err, fileID) {
        if(err) throw err;

        let buf = new Buffer(message.author.username + ": " + message.content + "\n");
        console.log(fileID);

        fs.write(fileID, buf, 0, buf.length, null, function(err, written, buffer) {
            
            if(err) throw err;
            console.log(err, written, buffer);
            fs.close(fileID, function() {
                console.log("Done");
            });
        });
    });
}
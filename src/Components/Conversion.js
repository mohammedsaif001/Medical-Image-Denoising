var ConvertTiff = require('tiff-to-png');

var options = {
    logLevel: 1
};

var converter = new ConvertTiff(options);
var location = '/C:/Users/Mohammed Saif/Downloads';

converter.convertOne("img157.tiff", location);
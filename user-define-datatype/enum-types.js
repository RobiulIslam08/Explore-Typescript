var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 2] = "readData";
    RequestType[RequestType["deletData"] = 5] = "deletData";
    RequestType[RequestType["getData"] = 6] = "getData";
})(RequestType || (RequestType = {}));
console.log(RequestType);

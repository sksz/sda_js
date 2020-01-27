function logThisContext() {
    console.log(this);
}
const testObj = {};
logThisContext()

testObj.logThisContext = logThisContext;
testObj.logThisContext();
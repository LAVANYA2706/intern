laptopA={
    sno:"abcd123",
    ram:"8 gb",
    disk:"256 gb",
    cpu:"intel i7",
    os:"windows 11"

}
//if your intention to copy the properties this wrong
*/laptopB= laptopA
laptopB.sno="abcd1234"
*/
laptopB={...}
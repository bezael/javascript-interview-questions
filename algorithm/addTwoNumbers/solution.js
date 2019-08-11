var addTwoNumbers = function (a, b) {
    var output = { val: 0, next: null };
    var currentNode = output;
    var rest = false;
    while (a || b) {
        var calc = ((a && a.val) || 0) + ((b && b.val) || 0) + +rest;
        if (calc >= 10) {
            calc = calc % 10;
            rest = true;
        }
        else {
            rest = false;
        }
        currentNode.next = {
            val: calc,
            next: null
        };
        currentNode = currentNode.next;
        a = a && a.next;
        b = b && b.next;
    }
    if (rest) {
        // * add a node if there's a rest
        currentNode.next = {
            val: 1,
            next: null
        };
        currentNode = currentNode.next;
    }
    return output.next;
};
console.log(addTwoNumbers({ val: 2, next: { val: 4, next: { val: 3, next: null } } }, { val: 5, next: { val: 6, next: { val: 4, next: null } } })); // 7 -> 0 -> 8

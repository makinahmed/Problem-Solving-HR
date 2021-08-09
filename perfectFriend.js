let arr = ['nur', 'turu', 'nilu', 'rahim', 'karim']

function perfectFriend(friendsArr) {
    if (Array.isArray(friendsArr)) {  // cheaked input is an array or not.
        let friendName = friendsArr[0]
        for (const friend of friendsArr) {
            if (friendName.length < friend.length) {  // compared the length among the strings of the input array.
                friendName = friend;
            }
        }
        return friendName;   // returned the final result.
    }
    else {   // execute if input is not an array 
        console.log('Please Enter an array that contain strings');
    }
}
console.log(perfectFriend(arr));



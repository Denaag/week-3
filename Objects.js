var dvdPlayer = {
    height: 3,
    width: 18,
    depth: 12,
    weight: 7,
    color: "black",
    dvdName: "Mulan",
    printDVDName: function() {
        console.log(this.dvdName);
    }
};

console.log(dvdPlayer.depth);
dvdPlayer.printDVDName();

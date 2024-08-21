class Tileref {
  constructor(id, tex, hide) {
    this.id = id;
    this.texname = 'tile_' + id;
    if (tex)
      ge.loadpic(tex, this.texname);
    this.phide = hide;
  }

  get tex() {
    return ge.getpic(this.texname);
  }

  get hide(){
    return this.phide && !(SHOWHIDDEN && !this.id == '');
  }
}

var tileset;
function initTileset(tiles) {
  tileset = {};

  for (var i in tiles) {
    tileset[i] = new Tileref(i, ...tiles[i]);
  }
}
# hexo-lazyload-image-cdn

**hexo-lazyload-image-cdn** is a hexo plugin which is used to have all images support lazyload automatically. With the help of this functionality, it will improve lots of the loading proformance..

All the lazy-load images only shows up when they are within current viewport.

## Install

```bash
$ npm install hexo-lazyload-image-cdn --save
```

## Usage

First add configuration in `_config.yml` from your hexo project.

```yaml
lazyload:
  enable: true 
  onlypost: false
  cdn:
    enabled: false
    url: https://cdn.com
```
**onlypost**
- If true, only the images from post or page will support lazy-load.
- If false, the whole images of your site will use lazy-load, including the images dist from your theme, but not including the background images from CSS style.

### specify **no-lazy** for specify image
we can also disable the lazy process if specify a attribute on img tag in both markdown or html
```
<img no-lazy src="abc.png" />
```

Run hexo command.

```bash
$ hexo clean && hexo g
```

Enjoy it!

## License

MIT

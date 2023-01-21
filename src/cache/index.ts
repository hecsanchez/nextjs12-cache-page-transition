import LRU from 'lru-cache';

const cache = new LRU({
    max: 100,
    ttl: 1000 * 60 * 60 * 24
});

export default cache;

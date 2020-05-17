<?php

class FileCache
{
    private static $directory = 'cache/';

    private static $instance;

    private static $ttl = 3600;

    /**
     * @return DivanteCacheManager
     */
    public static function getInstance()
    {
        if (!empty(self::$instance)) return self::$instance;

        return self::$instance = new self;
    }

    public static function setTtl($ttl)
    {
        self::$ttl = $ttl;
    }

    public static function setDirectory($directory)
    {
        self::$directory = $directory;
    }

     /**
      * @param string $key
      * @param mixed $data
      */
    public function save($key, $data, $ttl = -1)
    {
        if ($ttl < 0) $ttl = self::$ttl;

        if (!$this->keyExists($key, $ttl)) {
            $fileObject = new SplFileObject(self::$directory . $key, 'w');
            $fileObject->fwrite(serialize($data));
        }
    }

    /**
     * @param string $key
     * @return mixed
     */
    public function load($key, $ttl = -1)
    {
        if ($ttl < 0) $ttl = self::$ttl;

        if ($this->keyExists($key, $ttl)) {
            $fileObject = new SplFileObject(self::$directory . $key);
            $tmp = '';

            while (!$fileObject->eof()) {
                $tmp .= $fileObject->current();
                $fileObject->next();
            }

            return unserialize($tmp);
        }else{
            return false;
        }
    }

    /**
     * @param string $key
     */
    public function clear($key)
    {
        $this->save($key, false, 0);
    }

    /**
     * @param string $key
     * @return bool
     */
    protected function keyExists($key, $ttl = -1)
    {
        if ($ttl < 0) $ttl = self::$ttl;

        if (file_exists(self::$directory . $key)) {
            $fileInfoObject = new SplFileInfo(self::$directory . $key);
            $fileModifyTime = $fileInfoObject->getMTime();
            $time = time() - $fileModifyTime;

            return $time < $ttl;
        };

        return false;
    }
}
var_dump(FileCache::getInstance()->load('klucz1', 3600));
FileCache::getInstance()->save('klucz1', 'qwe', 20);
var_dump(FileCache::getInstance()->load('klucz1', 200));

FileCache::getInstance()->save('klucz2', new StdClass());
var_dump(FileCache::getInstance()->load('klucz2'));

FileCache::getInstance()->save('klucz3', ['key1' => 'val1', 'key2' => 'val2', 'test']);
var_dump(FileCache::getInstance()->load('klucz3'));

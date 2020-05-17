<?php

class FileCache
{
    const DIR = 'cache/';

    static $instance;

    /**
     * @return DivanteCacheManager
     */
    public static function getInstance()
    {
        if (!empty(self::$instance)) return self::$instance;

        return self::$instance = new self;
    }

     /**
      * @param string $key
      * @param mixed $data
      */
    public function save($key, $data, $ttl)
    {
        if (!$this->keyExists($key, $ttl)) {
            $fileObject = new SplFileObject(self::DIR . $key, 'w');
            $fileObject->fwrite($data);
        }
    }

    /**
     * @param string $key
     * @return mixed
     */
    public function load($key, $ttl)
    {
        if ($this->keyExists($key, $ttl)) {
            $fileObject = new SplFileObject(self::DIR . $key);
            $tmp = '';

            while (!$fileObject->eof()) {
                $tmp .= $fileObject->current();
                $fileObject->next();
            }

            return $tmp;
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
    protected function keyExists($key, $ttl)
    {
        if (file_exists(self::DIR . $key)) {
            $fileInfoObject = new SplFileInfo(self::DIR . $key);
            $fileModifyTime = $fileInfoObject->getMTime();
            $time = time() - $fileModifyTime;

            var_dump($time < $ttl);

            return $time < $ttl;
        };

        return false;
    }
}
var_dump(FileCache::getInstance()->load('klucz1', 3600));

FileCache::getInstance()->save('klucz1', 'qwe', 20);

var_dump(FileCache::getInstance()->load('klucz1', 200));

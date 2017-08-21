<?php

    class dao
    {
        private $host;
        private $dbname;
        private $user_name;
        private $password;

        function __construc()
        {
            $this->host = 'localHost';
            $this->dbname = 'prueba';
            $this->user_name = 'root';
            $this->password = '';
        }

        public function Conectar()
        {
            try{
                return new PDO('mysql:host='.$this->host.';dbnameB='.$this->dbname.'', $this->user_name, $this->password);
            }catch(PDOException $err){
                return $err;
            }
        }

        public function Select($query)
        {
            
        }


    }

?>
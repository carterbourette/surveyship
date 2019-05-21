<?php
require_once __DIR__.'/vendor/autoload.php';
use Respect\Rest\Router;
use Respect\Rest\Routable;

function get_body() {
    return json_decode(file_get_contents('php://input'));
}

class Surveys implements Respect\Rest\Routable {
    public function get($id=null) {
        return array('test' => 'hello world');
    }

    public function post() {
        foreach (get_body() as $key => $value) {

        }
        
        return array('post_body' => get_body());
    }

    public function put() {
        return null;
    }

    public function delete() {
        return null;
    }
}

$router = new Router;
$router->always('accept', array('application/json' => 'json_encode'));

$router->any('/surveys/*', 'Surveys');

$router->any('/**', function ($url) {
    return ['Welcome to Respect/Rest the url you want is: /'.implode('/', $url)];
});


// $this->db = new DBWrapper();
//
// $rs = $this->db->query('insert into ' . $this->table_name .' (' . implode(',', array_keys($query_params)) . ') values (' . DBWrapper::fill(array_keys($query_params)) . ')', array_values($query_params));
?>

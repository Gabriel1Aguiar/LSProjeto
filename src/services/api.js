const api = 'https://prods-json-server.gabriel18.repl.co/';

async function create(prods) {
  const res = await fetch(`${api}prods`, {
    method: 'post',
    body: JSON.stringify(prods),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  return await res.json();
}

async function readAll() {
  const res = await fetch(`${api}prods`);

  return await res.json();
}

async function read(id) {
  const res = await fetch(`${api}prods/${id}`);

  return await res.json();
}

async function readByName(name) {
  const res = await fetch(`${api}prods?name=${name}`);

  return await res.json();
}

async function update(id, prods) {
  const res = await fetch(`${api}prods/${id}`, {
    method: 'put',
    body: JSON.stringify(prods),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  return await res.json();
}

async function remove(id) {
  await fetch(`${api}prods/${id}`, {
    method: 'delete',
  });
}

export default { create, readAll, read, readByName, update, remove };
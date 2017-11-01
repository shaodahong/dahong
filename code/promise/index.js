function $q(executor) {
    const self = this;
    self.data = undefined;
    self.status = 'pending';
    self.resolved = [];
    self.rejected = [];

    function resolve(value) {
        self.status = 'fulfilled';
        self.data = value;
        self.resolved.forEach(val => {
            val();
        })
    }

    function reject(value) {
        self.status = 'rejected';
        self.data = value;
        self.rejected.forEach(val => {
            val();
        })
    }
    executor(resolve, reject)
}

$q.prototype.then = function (resolved, rejected) {
    var self = this;

    switch (self.status) {
        case 'pending':
        return new $q(function (resolve, reject) {
            self.resolved.push(function () {
                const data = resolved(self.data);
                resolve(data);
            })
            self.rejected.push(function () {
                const data = resolved(self.data);
                resolve(data);
            })
        })
        case 'fulfilled':
            return new $q(function (resolve, reject) {
                const data = resolved(self.data);
                resolve(data);
            })
        case 'rejected':
            return new $q(function (resolve, reject) {
                const data = rejected(self.data);
                reject(data);
            })
    }
}


new $q(function (resolve, reject) {
    var someThing;
    if (someThing) {
        resolve(1)
    } else {
        reject(2)
    }
}).then(function (val) {
    console.log('resolve', val)
}, function (val) {
    console.log('reject', val)
})
angular.module('app').service('unreviewedSessionCount', class UnreviewedSessionCount {
  value: number;
  
  constructor(private sessions_v2, private currentIdentity) {
    this.value = 0;
    sessions_v2;
    currentIdentity;
  }
  
  updateUnreviewedSessionCount() {
    this.sessions_v2.getUnreviewedCount(this.currentIdentity.currentUser.id)
        .then(data => {
      this.value = data.count;
    })
  }
})
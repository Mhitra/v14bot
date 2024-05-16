export default async (oldstatus, newstatus) => {
  /*
  if (newstatus.user.bot) return;
  if (oldstatus?.status === newstatus?.status) return;
  if (oldstatus?.status == undefined) {
    let data =  await user.findOne({ userID: newstatus.user.id });
    if (data?.enter == false || data?.lastseen == null) {
      await user.findOneAndUpdate(
        { userID: newstatus.user.id },
        {
          $set: {
            "user.lastseenoption.enter": true,
            "user.lastseenoption.firstseen": Date.now()
          }
        },
        { upsert: true }
      );
          }
  }
  if (newstatus.status === "offline") {
    await user.findOneAndUpdate(
      { userID: newstatus.user.id },
      {
        $set: {
          "user.lastseenoption.lastseen": Date.now(),
          "user.lastseenoption.enter": false
        }
      },
      { upsert: true }
    );
  
  }   
  */     };

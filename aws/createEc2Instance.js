var AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-1';

var ec2 = new AWS.EC2();

var params = {
    ImageId: 'ami-3e42b65f',
    InstanceType: 't1.micro',
    KeyName: 'dev',
    SecurityGroupIds: ['sg-dd594eb9'],
    MinCount: 1,
    MaxCount: 1
};

ec2.runInstances(params, function(err, data){
    if(err) {
        console.log("Could not create instance", err);
        return;
    }
    var instanceId = data.Instances[0].InstanceId;
    console.log("Created instance!", instanceId);
});

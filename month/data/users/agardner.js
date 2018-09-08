userdata['agardner'] = {
  "identity": ids["agardner"],
  "reviewCountPlus2": 1,
  "reviewCountPlus1": 0,
  "reviewCountMinus1": 0,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1530040611000,
  "lastActiveDate": 1535126175000,
  "activeDayCount": 2,
  "commits": [
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I4f4055441042d790008754bb085447f52e1c1a78",
      "commitNumber": 11558,
      "subject": "Extend lftools with scripts for ldap lookups",
      "owner": ids["agardner"],
      "url": "https://gerrit.linuxfoundation.org/infra/11558",
      "commitMessage": "Extend lftools with scripts for ldap lookups\n\nAdd 2 new commands to lftools:\n\n    - infofile\n    - ldap\n\nprereqs:\nFor ldap lookups to work you must be on the VPN and have the cert\nto get the cert: log in to any collab system and grab /etc/ipa/ca.crt\nin /etc/openldap/ldap.conf\n\nTLS_REQCERT always\nTLS_CACERTDIR /etc/openldap/certs\nTLS_CACERT /etc/openldap/certs/ca.crt\n\nTo test:\n\n1. Clone this patchset\n2. start venv\n\n   pip uninstall lftools \u0026\u0026 pip install -e .\n\nUsage:\n\n$ lftools ldap\nUsage: lftools ldap [OPTIONS] COMMAND [ARGS]...\n\n  LDAP TOOLS.\n\nCommands:\n  autocorrectinfofile  Verify INFO.yaml against LDAP group.\n  csv                  Query an Ldap server.\n  inactivecommitters   Check committer participation.\n  yaml4info            Build yaml of commiters for your INFO.yaml.\n\n$ lftools infofile\nUsage: lftools infofile [OPTIONS] COMMAND [ARGS]...\n\n  INFO.yaml TOOLS.\n\nCommands:\n  get-committers    Extract Committer info from INFO.yaml or LDAP...\n  sync-committers   Script to insert missing values from ldap...\n\nIssue: RELENG-407\nChange-Id: I4f4055441042d790008754bb085447f52e1c1a78\nSigned-off-by: Aric Gardner \u003cagardner@linuxfoundation.org\u003e\n",
      "createdOnDate": 1530040611000,
      "lastUpdatedDate": 1535120808000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["bramwelt"],
        ids["lf-jenkins"],
        ids["agrimberg"],
        ids["abaranov"],
        ids["agardner"],
        ids["askb"]
      ],
      "comments": [
        {
          "timestamp": 1530040611000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1530041032000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1530047425000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1530047712000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/117/"
        },
        {
          "timestamp": 1530047904000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/117/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/117/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/117"
        },
        {
          "timestamp": 1530056285000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 3:\n\n(1 comment)"
        },
        {
          "timestamp": 1530122057000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1530122164000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/121/"
        },
        {
          "timestamp": 1530122375000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/121/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/121/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/121"
        },
        {
          "timestamp": 1530127564000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1530127845000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/122/"
        },
        {
          "timestamp": 1530128187000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/122/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/122/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/122"
        },
        {
          "timestamp": 1530128919000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 6."
        },
        {
          "timestamp": 1530129115000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 7."
        },
        {
          "timestamp": 1530129306000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/123/"
        },
        {
          "timestamp": 1530129505000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/123/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/123/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/123"
        },
        {
          "timestamp": 1530129989000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 8."
        },
        {
          "timestamp": 1530130045000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 9: Commit message was updated."
        },
        {
          "timestamp": 1530130271000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 10."
        },
        {
          "timestamp": 1530130281000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/124/"
        },
        {
          "timestamp": 1530130490000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/124/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/124/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/124"
        },
        {
          "timestamp": 1530231898000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 11."
        },
        {
          "timestamp": 1530232203000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 11:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/125/"
        },
        {
          "timestamp": 1530232343000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 12."
        },
        {
          "timestamp": 1530232371000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 11: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/125/ : ABORTED\n\nFile lftools/cli/parseinfofile.py is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/125/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/125"
        },
        {
          "timestamp": 1530232596000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 13."
        },
        {
          "timestamp": 1530232610000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 13:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/126/"
        },
        {
          "timestamp": 1530232821000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 13: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/126/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/126/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/126"
        },
        {
          "timestamp": 1530294687000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 14."
        },
        {
          "timestamp": 1530294738000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 14:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/129/"
        },
        {
          "timestamp": 1530294999000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 14: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/129/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/129/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/129"
        },
        {
          "timestamp": 1530295343000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 15."
        },
        {
          "timestamp": 1530295528000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 15:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/130/"
        },
        {
          "timestamp": 1530295780000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 15: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/130/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/130/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/130"
        },
        {
          "timestamp": 1530298507000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 16."
        },
        {
          "timestamp": 1530298741000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 16:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/131/"
        },
        {
          "timestamp": 1530298903000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 16: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/131/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/131/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/131"
        },
        {
          "timestamp": 1530301508000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 17."
        },
        {
          "timestamp": 1530301587000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 17:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/132/"
        },
        {
          "timestamp": 1530301796000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 17: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/132/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/132"
        },
        {
          "timestamp": 1530737816000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 18."
        },
        {
          "timestamp": 1530738107000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 18:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/139/"
        },
        {
          "timestamp": 1530738201000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 19."
        },
        {
          "timestamp": 1530738223000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 18: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/139/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/139/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/139"
        },
        {
          "timestamp": 1530738388000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 19:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/140/"
        },
        {
          "timestamp": 1530738553000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 19: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/140/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/140/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/140"
        },
        {
          "timestamp": 1530739121000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 20."
        },
        {
          "timestamp": 1530739407000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 20:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/141/"
        },
        {
          "timestamp": 1530739597000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 20: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/141/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/141/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/141"
        },
        {
          "timestamp": 1530808952000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 21."
        },
        {
          "timestamp": 1530809093000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 22."
        },
        {
          "timestamp": 1530809243000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 22:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/142/"
        },
        {
          "timestamp": 1530809477000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 22: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/142/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/142/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/142"
        },
        {
          "timestamp": 1530810620000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 23."
        },
        {
          "timestamp": 1530810705000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 23:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/143/"
        },
        {
          "timestamp": 1530810873000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 23: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/143/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/143/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/143"
        },
        {
          "timestamp": 1530811918000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 24."
        },
        {
          "timestamp": 1530812197000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 24:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/144/"
        },
        {
          "timestamp": 1530812385000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 24: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/144/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/144/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/144"
        },
        {
          "timestamp": 1530815279000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 25."
        },
        {
          "timestamp": 1530815529000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 25:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/145/"
        },
        {
          "timestamp": 1530815530000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 26."
        },
        {
          "timestamp": 1530815555000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 25: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/145/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/145/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/145"
        },
        {
          "timestamp": 1530815556000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 26:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/146/"
        },
        {
          "timestamp": 1530815701000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 26: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/146/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/146/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/146"
        },
        {
          "timestamp": 1530817028000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 27."
        },
        {
          "timestamp": 1530817296000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 27:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/147/"
        },
        {
          "timestamp": 1530817493000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 27: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/147/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/147"
        },
        {
          "timestamp": 1531180963000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 28."
        },
        {
          "timestamp": 1531181148000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 28:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/150/"
        },
        {
          "timestamp": 1531181387000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 28: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/150/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/150"
        },
        {
          "timestamp": 1531181550000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 28: Code-Review-1\n\n(5 comments)"
        },
        {
          "timestamp": 1531243076000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 29."
        },
        {
          "timestamp": 1531243336000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 29:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/151/"
        },
        {
          "timestamp": 1531243569000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 29: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/151/ : FAILURE\n\nFile shell/GrouplookupUser is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/151/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/151"
        },
        {
          "timestamp": 1531248808000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 30."
        },
        {
          "timestamp": 1531249097000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 30:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/152/"
        },
        {
          "timestamp": 1531249318000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 30: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/152/ : FAILURE\n\nFile shell/GrouplookupUser is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/152/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/152"
        },
        {
          "timestamp": 1531515261000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 31."
        },
        {
          "timestamp": 1531515546000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 31:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/178/"
        },
        {
          "timestamp": 1531515759000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 31: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/178/ : FAILURE\n\nFile shell/GrouplookupUser is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/178/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/178"
        },
        {
          "timestamp": 1531947666000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 32."
        },
        {
          "timestamp": 1531947760000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 32:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/189/"
        },
        {
          "timestamp": 1531947918000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 32: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/189/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/189/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/189"
        },
        {
          "timestamp": 1532028249000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 33."
        },
        {
          "timestamp": 1532028268000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 33:\n\n(1 comment)"
        },
        {
          "timestamp": 1532028437000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 33:\n\n(1 comment)"
        },
        {
          "timestamp": 1532028547000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 33:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/194/"
        },
        {
          "timestamp": 1532028715000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 33: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/194/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/194/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/194"
        },
        {
          "timestamp": 1532030753000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 34."
        },
        {
          "timestamp": 1532031045000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 34:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/195/"
        },
        {
          "timestamp": 1532031194000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 34: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/195/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/195/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/195"
        },
        {
          "timestamp": 1532113585000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 34:\n\nrecheck"
        },
        {
          "timestamp": 1532113689000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 34: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/198/"
        },
        {
          "timestamp": 1532113858000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 34: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/198/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/198/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/198"
        },
        {
          "timestamp": 1532368103000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 34:\n\nrecheck"
        },
        {
          "timestamp": 1532368407000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 34: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/199/"
        },
        {
          "timestamp": 1532368563000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 34: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/199/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/199/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/199"
        },
        {
          "timestamp": 1532440547000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 34:\n\nrecheck"
        },
        {
          "timestamp": 1532441297000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 34: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/201/"
        },
        {
          "timestamp": 1532441438000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 34: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/201/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/201/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/201"
        },
        {
          "timestamp": 1532566037000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 34: Code-Review-1\n\n(3 comments)\n\nCan we consistently use 4 space indents for the shell scripts so that they are easier to read?\n\nDo the ldap and info file changes need to be merged together? if not maybe we can break them out into 2 patches so that we can merge them faster / have smaller amounts of things to review.\n\nThis is fine as is too if it\u0027s too hard to do."
        },
        {
          "timestamp": 1532585365000,
          "reviewer": ids["askb"],
          "message": "Patch Set 34:\n\nrecheck"
        },
        {
          "timestamp": 1532585641000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 34: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/213/"
        },
        {
          "timestamp": 1532585847000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 34: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/213/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/213"
        },
        {
          "timestamp": 1532635275000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 35."
        },
        {
          "timestamp": 1532635380000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 35:\n\n@Thanh I would like to merge this together, the ldap script has no real value on its own."
        },
        {
          "timestamp": 1532635572000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 35:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/217/"
        },
        {
          "timestamp": 1532635783000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 35: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/217/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/217"
        },
        {
          "timestamp": 1532707297000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 35: Code-Review+1"
        },
        {
          "timestamp": 1532709797000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 35: Code-Review-1\n\n(35 comments)"
        },
        {
          "timestamp": 1533664193000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 36."
        },
        {
          "timestamp": 1533664269000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 36:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/233/"
        },
        {
          "timestamp": 1533664521000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 36: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/233/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/233"
        },
        {
          "timestamp": 1533752026000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 37."
        },
        {
          "timestamp": 1533752290000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 37:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/234/"
        },
        {
          "timestamp": 1533752401000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 38."
        },
        {
          "timestamp": 1533752425000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 37: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/234/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/234/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/234"
        },
        {
          "timestamp": 1533752439000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 38:\n\n(24 comments)"
        },
        {
          "timestamp": 1533752524000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 39."
        },
        {
          "timestamp": 1533752670000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 39:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/235/"
        },
        {
          "timestamp": 1533752689000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 39:\n\n(2 comments)"
        },
        {
          "timestamp": 1533752893000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 39: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/235/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/235"
        },
        {
          "timestamp": 1534597555000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 35:\n\n(1 comment)"
        },
        {
          "timestamp": 1534597642000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 39: Code-Review-1\n\nI\u0027d like to see that the bash functions are appropriately indented for readability."
        },
        {
          "timestamp": 1534789358000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 40."
        },
        {
          "timestamp": 1534789496000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 40:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/240/"
        },
        {
          "timestamp": 1534789741000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 40: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/240/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/240"
        },
        {
          "timestamp": 1534809564000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 35:\n\n(7 comments)"
        },
        {
          "timestamp": 1534810972000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 41."
        },
        {
          "timestamp": 1534811052000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 42."
        },
        {
          "timestamp": 1534811093000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 40:\n\n(3 comments)"
        },
        {
          "timestamp": 1534811137000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 41:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/241/"
        },
        {
          "timestamp": 1534811185000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 42:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/242/"
        },
        {
          "timestamp": 1534811321000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 41: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/241/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/241/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/241"
        },
        {
          "timestamp": 1534811401000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 42: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/242/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/242/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/242"
        },
        {
          "timestamp": 1534811532000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 43."
        },
        {
          "timestamp": 1534811591000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 35:\n\n(1 comment)"
        },
        {
          "timestamp": 1534811783000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 43:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/243/"
        },
        {
          "timestamp": 1534812007000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 43: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/243/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/243"
        },
        {
          "timestamp": 1534812025000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 44."
        },
        {
          "timestamp": 1534812257000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 44:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/244/"
        },
        {
          "timestamp": 1534812557000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 44: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/244/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/244"
        },
        {
          "timestamp": 1534814449000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 44: Code-Review-1\n\n(9 comments)\n\n@Aric, I made some minor changes but mainly updated to add the reno release notes file. Please check to make sure I didn\u0027t unintentionally break anything and review the release notes file. It should provide details on whatever an end user should know using the new tool.\n\nTake a look at https://docs.openstack.org/reno/latest/user/usage.html#editing-a-release-note for details on the release notes format and add any other fields you think might be important to add."
        },
        {
          "timestamp": 1534833148000,
          "reviewer": ids["askb"],
          "message": "Patch Set 44:\n\n(4 comments)\n\nsome initial comments, will test this and get back."
        },
        {
          "timestamp": 1534867053000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 44:\n\n(4 comments)"
        },
        {
          "timestamp": 1534877202000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 45."
        },
        {
          "timestamp": 1534877222000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 45:\n\n(6 comments)"
        },
        {
          "timestamp": 1534877465000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 45:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/245/"
        },
        {
          "timestamp": 1534877663000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 45: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/245/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/245"
        },
        {
          "timestamp": 1534887115000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 46."
        },
        {
          "timestamp": 1534887185000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 46:\n\nUpdated the docs to update the get-committers and sync-committers rename.\n\nAlso updated click command for get_committers and sync_committers to use dashes (get-committers and sync-committers) as using underscores in command names is ugly."
        },
        {
          "timestamp": 1534887245000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 46: Code-Review+1"
        },
        {
          "timestamp": 1534887308000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 46:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/246/"
        },
        {
          "timestamp": 1534887525000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 46: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/246/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/246"
        },
        {
          "timestamp": 1534888446000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 46: Code-Review+1"
        },
        {
          "timestamp": 1534967664000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 46: Code-Review+2"
        },
        {
          "timestamp": 1535120394000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 46: Code-Review+2\n\nGoing to merge this since I\u0027d like to release lftools today. Further discussion and tweaks can be taken up on the mailing list / Jira."
        },
        {
          "timestamp": 1535120808000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "ad66772385d67ed29d455cc39939f16a15cf0768",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/1",
          "uploader": ids["agardner"],
          "createdOnDate": 1530040611000,
          "author": ids["agardner"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 132,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "4661cc083a5443fc43e075822639b80fd6b0fed4",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1530041032000,
          "author": ids["agardner"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 130,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "6cf84b9491ffa59bcc1ca94df4a780fe9891e2de",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/3",
          "uploader": ids["agardner"],
          "createdOnDate": 1530047425000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530047904000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 31,
              "reviewer": ids["bramwelt"],
              "message": "here",
              "patchSetTimestamp": 1530047425000
            }
          ],
          "sizeInsertions": 128,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "55defe1f6099c386237731e1a57d523875ddc8d7",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/4",
          "uploader": ids["agardner"],
          "createdOnDate": 1530122057000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530122375000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 132,
          "sizeDeletions": 0
        },
        {
          "number": 5,
          "revision": "d7a2b99f15d64cb90ea565ae8d7815d9fbfe74f2",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/5",
          "uploader": ids["agardner"],
          "createdOnDate": 1530127564000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530128187000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 195,
          "sizeDeletions": 0
        },
        {
          "number": 6,
          "revision": "afad36fab2e57679d683188eea3f5cd57f94748d",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/6",
          "uploader": ids["agardner"],
          "createdOnDate": 1530128919000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 28,
              "reviewer": ids["zxiiro"],
              "message": "indent by 4 otherwise it\u0027s not affecting the def above. Python cares very much about indents :(",
              "patchSetTimestamp": 1530128919000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 141,
              "reviewer": ids["zxiiro"],
              "message": "These need to be spaces not tabs.",
              "patchSetTimestamp": 1530128919000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 149,
              "reviewer": ids["zxiiro"],
              "message": "Remove this.",
              "patchSetTimestamp": 1530128919000
            }
          ],
          "sizeInsertions": 214,
          "sizeDeletions": 0
        },
        {
          "number": 7,
          "revision": "c24ad9294486a72d1ad4b9a27b277ef932623a46",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/7",
          "uploader": ids["agardner"],
          "createdOnDate": 1530129115000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530129505000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 214,
          "sizeDeletions": 0
        },
        {
          "number": 8,
          "revision": "fa50468ff9f81a08176121dd83d6bfc5cc780f11",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/8",
          "uploader": ids["agardner"],
          "createdOnDate": 1530129989000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 215,
          "sizeDeletions": 0
        },
        {
          "number": 9,
          "revision": "060261733d07e7a9fc9124f3792b36ea18c4abc7",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/9",
          "uploader": ids["agardner"],
          "createdOnDate": 1530130045000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 215,
          "sizeDeletions": 0
        },
        {
          "number": 10,
          "revision": "71ff6b3ae29e61d0b06036846b14f7798683aebf",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/10",
          "uploader": ids["agardner"],
          "createdOnDate": 1530130271000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530130490000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 216,
          "sizeDeletions": 0
        },
        {
          "number": 11,
          "revision": "ee6dffb7c44e9544cae3a828034ae18c5385cb48",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/11",
          "uploader": ids["agardner"],
          "createdOnDate": 1530231898000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530232371000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 355,
          "sizeDeletions": 0
        },
        {
          "number": 12,
          "revision": "1357154a9daf358d67b8810005b07eac1b2e3a8f",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/12",
          "uploader": ids["agardner"],
          "createdOnDate": 1530232343000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 355,
          "sizeDeletions": 0
        },
        {
          "number": 13,
          "revision": "4811b39667213e166902457ba5d7dc79bab66de8",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/13",
          "uploader": ids["agardner"],
          "createdOnDate": 1530232596000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530232821000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 366,
          "sizeDeletions": 0
        },
        {
          "number": 14,
          "revision": "67ea22f82025426906a9e8eb078b2edd78cab21f",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/14",
          "uploader": ids["agardner"],
          "createdOnDate": 1530294687000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530294999000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 342,
          "sizeDeletions": 0
        },
        {
          "number": 15,
          "revision": "9f070e5d0157fed342f4ffa12ccc5c6fa41a12c8",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/15",
          "uploader": ids["agardner"],
          "createdOnDate": 1530295343000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530295780000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 353,
          "sizeDeletions": 0
        },
        {
          "number": 16,
          "revision": "3296e2647a6509fdc3cf50e8bd644649cfdb215f",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/16",
          "uploader": ids["agardner"],
          "createdOnDate": 1530298507000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530298903000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 361,
          "sizeDeletions": 0
        },
        {
          "number": 17,
          "revision": "f94f62e34379dc9537d7644601b5b509050ef264",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/17",
          "uploader": ids["agardner"],
          "createdOnDate": 1530301508000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1530301796000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 357,
          "sizeDeletions": 0
        },
        {
          "number": 18,
          "revision": "17ab39836640351ab1d595c3ebd949f0194b832c",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/18",
          "uploader": ids["agardner"],
          "createdOnDate": 1530737816000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530738223000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 451,
          "sizeDeletions": 0
        },
        {
          "number": 19,
          "revision": "fca73170c22cb36172c9395bd5b9d97cb9da181e",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/19",
          "uploader": ids["agardner"],
          "createdOnDate": 1530738201000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530738553000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 451,
          "sizeDeletions": 0
        },
        {
          "number": 20,
          "revision": "c3cb60de5a8c46858af5b5dba10aad1687671c06",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/20",
          "uploader": ids["agardner"],
          "createdOnDate": 1530739121000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530739597000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 448,
          "sizeDeletions": 0
        },
        {
          "number": 21,
          "revision": "9d65e5536e22142b83cc4e9f6ab28cd2c1830812",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/21",
          "uploader": ids["agardner"],
          "createdOnDate": 1530808952000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 466,
          "sizeDeletions": -291
        },
        {
          "number": 22,
          "revision": "844945c96b0288a516c2d0fe4b6be1a49715417f",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/22",
          "uploader": ids["agardner"],
          "createdOnDate": 1530809093000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530809477000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 466,
          "sizeDeletions": 0
        },
        {
          "number": 23,
          "revision": "65f29eeb9e224d96b57b2e100f4e56d5906650b5",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/23",
          "uploader": ids["agardner"],
          "createdOnDate": 1530810620000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530810873000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 467,
          "sizeDeletions": 0
        },
        {
          "number": 24,
          "revision": "6e47fc07a7dd9c009c73cf0d4b68e65ea6ee6205",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/24",
          "uploader": ids["agardner"],
          "createdOnDate": 1530811918000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530812385000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 457,
          "sizeDeletions": 0
        },
        {
          "number": 25,
          "revision": "2cd2cec8203e8269ceb5221072ec902217311de8",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/25",
          "uploader": ids["agardner"],
          "createdOnDate": 1530815279000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530815555000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 543,
          "sizeDeletions": 0
        },
        {
          "number": 26,
          "revision": "28baea74b56ae564ff807648a24b1b77ee5ec505",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/26",
          "uploader": ids["agardner"],
          "createdOnDate": 1530815530000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1530815701000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 545,
          "sizeDeletions": 0
        },
        {
          "number": 27,
          "revision": "8240a1056302d79af15a84120a0f435642ddb7c1",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/27",
          "uploader": ids["agardner"],
          "createdOnDate": 1530817028000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1530817493000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 541,
          "sizeDeletions": 0
        },
        {
          "number": 28,
          "revision": "1b9695dc80853e0a4c52a392bfa5d7fb7cab4249",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/28",
          "uploader": ids["agardner"],
          "createdOnDate": 1531180963000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1531181550000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1531181387000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "lftools/cli/__init__.py",
              "line": 22,
              "reviewer": ids["zxiiro"],
              "message": "I think the parseinfofile and correctinfofile should be merged into a single infofile command. Something like:\n\n lftools info correct|parse [args]",
              "patchSetTimestamp": 1531180963000
            },
            {
              "file": "lftools/cli/__init__.py",
              "line": 22,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1531180963000
            },
            {
              "file": "requirements.txt",
              "line": 5,
              "reviewer": ids["zxiiro"],
              "message": "What\u0027s this providing that we cannot achieve with the regular PyYAML import?",
              "patchSetTimestamp": 1531180963000
            },
            {
              "file": "requirements.txt",
              "line": 5,
              "reviewer": ids["agardner"],
              "message": "I am reading and then writing back to the YAML files",
              "patchSetTimestamp": 1531180963000
            }
          ],
          "sizeInsertions": 590,
          "sizeDeletions": 0
        },
        {
          "number": 29,
          "revision": "aa859be1eb04df4255376283eafd200949b85f11",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/29",
          "uploader": ids["agardner"],
          "createdOnDate": 1531243076000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1531243569000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 854,
          "sizeDeletions": 0
        },
        {
          "number": 30,
          "revision": "57d39cdf98ad2c3bad6821cdb018283d5511295d",
          "parents": [
            "2c2b219f270bee5901a54a22ae30a9717d9577f3"
          ],
          "ref": "refs/changes/58/11558/30",
          "uploader": ids["agardner"],
          "createdOnDate": 1531248808000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1531249318000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 874,
          "sizeDeletions": 0
        },
        {
          "number": 31,
          "revision": "66b53262e3a4c3a41d5be15e7f48eb2824b93581",
          "parents": [
            "e3fd906d098ba9c75cd16dfdca895e58b37b65b7"
          ],
          "ref": "refs/changes/58/11558/31",
          "uploader": ids["agardner"],
          "createdOnDate": 1531515261000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1531515759000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1159,
          "sizeDeletions": 0
        },
        {
          "number": 32,
          "revision": "1075f4602e033d321d68c6a7b970ec8ddf555029",
          "parents": [
            "e3fd906d098ba9c75cd16dfdca895e58b37b65b7"
          ],
          "ref": "refs/changes/58/11558/32",
          "uploader": ids["agardner"],
          "createdOnDate": 1531947666000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1531947918000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1193,
          "sizeDeletions": 0
        },
        {
          "number": 33,
          "revision": "8502142c50972e360eeacb2b5052dd1a46b1a2b2",
          "parents": [
            "e3fd906d098ba9c75cd16dfdca895e58b37b65b7"
          ],
          "ref": "refs/changes/58/11558/33",
          "uploader": ids["agardner"],
          "createdOnDate": 1532028249000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1532028715000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1227,
          "sizeDeletions": 0
        },
        {
          "number": 34,
          "revision": "54b7e2b803896741f6dca93754f147f97e40c1c4",
          "parents": [
            "e3fd906d098ba9c75cd16dfdca895e58b37b65b7"
          ],
          "ref": "refs/changes/58/11558/34",
          "uploader": ids["agardner"],
          "createdOnDate": 1532030753000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1532566037000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1532585847000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/autocorrectinfofile",
              "line": 4,
              "reviewer": ids["zxiiro"],
              "message": "2018 right? or are this imported files?",
              "patchSetTimestamp": 1532030753000
            },
            {
              "file": "shell/inactivecommitters",
              "line": 4,
              "reviewer": ids["zxiiro"],
              "message": "2018 right? or are this imported files?",
              "patchSetTimestamp": 1532030753000
            },
            {
              "file": "shell/yaml4info",
              "line": 4,
              "reviewer": ids["zxiiro"],
              "message": "2018 right? or are this imported files?",
              "patchSetTimestamp": 1532030753000
            },
            {
              "file": "shell/yaml4info",
              "line": 4,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532030753000
            }
          ],
          "sizeInsertions": 676,
          "sizeDeletions": 0
        },
        {
          "number": 35,
          "revision": "fe33c666e9adb9b0c4625c7055a31f40c1ebc4e5",
          "parents": [
            "e3fd906d098ba9c75cd16dfdca895e58b37b65b7"
          ],
          "ref": "refs/changes/58/11558/35",
          "uploader": ids["agardner"],
          "createdOnDate": 1532635275000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1532709797000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1532707297000,
              "grantedBy": ids["agardner"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1532635783000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "lftools/cli/infofile.py",
              "line": 26,
              "reviewer": ids["zxiiro"],
              "message": "If there\u0027s no envvar just don\u0027t include the definition.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 26,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 27,
              "reviewer": ids["zxiiro"],
              "message": "This doesn\u0027t look optional. I would use click.argument in this case so that you call the command as: parse FILE --params",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 27,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 28,
              "reviewer": ids["zxiiro"],
              "message": "Should this actually be a \"bool\" then? seems like that\u0027s how it\u0027s used below.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 28,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 31,
              "reviewer": ids["zxiiro"],
              "message": "LFID",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 31,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 42,
              "reviewer": ids["zxiiro"],
              "message": "Unnecessary, if lookup is [] then the for loop below won\u0027t execute anyway.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 42,
              "reviewer": ids["agardner"],
              "message": "yeah this was for some error correction i mean to add, fixed in the latest patchset",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 54,
              "reviewer": ids["zxiiro"],
              "message": "I think the if logic up here doesn\u0027t make sense.\n\n1. Full seems to take precedence over everything. So if someone says --full --id abc123, then it will loop the lookup for all results not just for the one id.\n\nThese 2 switches should be mutually exclusive right?\n\nSo if someone passes an ID then it will only print the ID of that person, otherwise use the loop to iterate over all committers.\n\nRegardless of the above statement, if someone passes --full then print all of the info, otherwise only print the id field.\n\nTo me this sounds like we need 2 sets of if-statements.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 54,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 54,
              "reviewer": ids["zxiiro"],
              "message": "Not sure this is addressed. Let me do a fresh comment on the latest change though.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 60,
              "reviewer": ids["zxiiro"],
              "message": "If there is no envvar just don\u0027t declare it.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 60,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 65,
              "reviewer": ids["zxiiro"],
              "message": "For the above 3 settings none of them are optional so I think we should use click.arguments instead so that the command becomes:\n\n correct info_file ldap_file user_id [--repo NAME]",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 65,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 67,
              "reviewer": ids["zxiiro"],
              "message": "What is the context for the repo name? is it a repo in ldap or what?",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 67,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 67,
              "reviewer": ids["zxiiro"],
              "message": "I don\u0027t think this is addressed. I still don\u0027t understand the context of the repo name?",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 69,
              "reviewer": ids["zxiiro"],
              "message": "info_file",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 69,
              "reviewer": ids["zxiiro"],
              "message": "ldap_file",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 69,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 81,
              "reviewer": ids["zxiiro"],
              "message": "info_data\n\nwould be more clear.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 81,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 81,
              "reviewer": ids["zxiiro"],
              "message": "Wasn\u0027t addressed.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 82,
              "reviewer": ids["zxiiro"],
              "message": "ldap_data would be more clear.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 82,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 82,
              "reviewer": ids["zxiiro"],
              "message": "Wasn\u0027t addressed.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 82,
              "reviewer": ids["zxiiro"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 105,
              "reviewer": ids["zxiiro"],
              "message": "committer*",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 105,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 107,
              "reviewer": ids["zxiiro"],
              "message": "I\u0027m not entirely sure what this if-statement is doing. seems like there is no code at all after it so there\u0027s nothing to break from. Did you mean to put this above the data line previously? or should it just be removed entirely?",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 107,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 109,
              "reviewer": ids["zxiiro"],
              "message": "unnecessary else statement the continue is implied since there\u0027s nothing after.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 109,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 121,
              "reviewer": ids["zxiiro"],
              "message": "Use the with open() pattern instead of f.close()",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 121,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 121,
              "reviewer": ids["zxiiro"],
              "message": "This wasn\u0027t addressed.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 121,
              "reviewer": ids["zxiiro"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 34,
              "reviewer": ids["zxiiro"],
              "message": "should be click.argument if this is not optional.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 34,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 36,
              "reviewer": ids["zxiiro"],
              "message": "What is groups? is it 1 group? or if I can pass more than 1 what\u0027s the format?\n\nI think it\u0027s a better user experience if hte command is like this:\n\n yaml4info group [...]\n\nwhere you can keep passing space separated list of groups to parse (assuming this supports passing more than 1?)",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 36,
              "reviewer": ids["agardner"],
              "message": "not sure how to do this",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 43,
              "reviewer": ids["zxiiro"],
              "message": "Would be more clear as gerrit-url",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 43,
              "reviewer": ids["agardner"],
              "message": "it doesnt seem to like -\u0027s in the option name",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 43,
              "reviewer": ids["zxiiro"],
              "message": "huh... really? odd :/",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 43,
              "reviewer": ids["zxiiro"],
              "message": "This works: \u0027--gerrit-url\u0027\n\nWhen it turns into a variable it becomes gerrit_url which is probably why you were having issues. I\u0027ve updated this in the latest patch.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 46,
              "reviewer": ids["zxiiro"],
              "message": "if these options are not actually optional I think it would be better if the format of the command was:\n\n inactivecommitters URL GROUP",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 46,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 55,
              "reviewer": ids["zxiiro"],
              "message": "GERRIT_CLONE_BASE",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 55,
              "reviewer": ids["zxiiro"],
              "message": "--gerrit-clone-base",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 57,
              "reviewer": ids["zxiiro"],
              "message": "LDAP_GROUP",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 57,
              "reviewer": ids["zxiiro"],
              "message": "--ldap-group",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 64,
              "reviewer": ids["zxiiro"],
              "message": "We shouldn\u0027t use click.option() for required arguments that have no default value. Use click.argument instead.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 64,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 73,
              "reviewer": ids["zxiiro"],
              "message": "--ldap-server",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 75,
              "reviewer": ids["zxiiro"],
              "message": "--ldap-user-base",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 77,
              "reviewer": ids["zxiiro"],
              "message": "--ldap-group-base",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 79,
              "reviewer": ids["zxiiro"],
              "message": "We should use a click.argument() that accepts a space separated list of inputs like:\n\n csv GROUP [...]",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 79,
              "reviewer": ids["agardner"],
              "message": "not sure how to do this..",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/parseinfofile.py",
              "line": 0,
              "reviewer": ids["zxiiro"],
              "message": "I think we forgot to delete this file? It\u0027s in the infofile.py now right?",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "lftools/cli/parseinfofile.py",
              "line": 0,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "setup.py",
              "line": 63,
              "reviewer": ids["zxiiro"],
              "message": "Alphabetical order please.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "shell/autocorrectinfofile",
              "line": 19,
              "reviewer": ids["zxiiro"],
              "message": "can we put it in /tmp/infofile/\u003cfiles\u003e instead. That way our /tmp directory does not get cluttered by a bunch of output from a single application.",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "shell/autocorrectinfofile",
              "line": 19,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "shell/autocorrectinfofile",
              "line": 20,
              "reviewer": ids["zxiiro"],
              "message": "4 space indent these functions (below as well, and in the other shell files)..",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "shell/autocorrectinfofile",
              "line": 20,
              "reviewer": ids["agardner"],
              "message": "I would not normally do this, do we have a style guide I can follow?",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "shell/autocorrectinfofile",
              "line": 20,
              "reviewer": ids["zxiiro"],
              "message": "No, we should make one though. However in general most of our scripts use 4 space indents.\n\nRegardless of 4 or 2 space indents though we should indent functions for readability:\n\n func1() {\n     echo hello\n     echo world\n }",
              "patchSetTimestamp": 1532635275000
            },
            {
              "file": "shell/yaml4info",
              "line": 47,
              "reviewer": ids["zxiiro"],
              "message": "move this down a line.",
              "patchSetTimestamp": 1532635275000
            }
          ],
          "sizeInsertions": 676,
          "sizeDeletions": 0
        },
        {
          "number": 36,
          "revision": "e38334b2dacc7da9289d2c6a766af700206fcf78",
          "parents": [
            "b383380735089719b120dd613eda4fcfa4ea55ff"
          ],
          "ref": "refs/changes/58/11558/36",
          "uploader": ids["agardner"],
          "createdOnDate": 1533664193000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1533664521000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 673,
          "sizeDeletions": -1
        },
        {
          "number": 37,
          "revision": "f64b28c446f86090457c15e40b6d5b6b142e3fe4",
          "parents": [
            "b383380735089719b120dd613eda4fcfa4ea55ff"
          ],
          "ref": "refs/changes/58/11558/37",
          "uploader": ids["agardner"],
          "createdOnDate": 1533752026000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1533752425000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 691,
          "sizeDeletions": -1
        },
        {
          "number": 38,
          "revision": "f2f2cf0c971d650ed6319e671de3ffab687b98bc",
          "parents": [
            "b383380735089719b120dd613eda4fcfa4ea55ff"
          ],
          "ref": "refs/changes/58/11558/38",
          "uploader": ids["agardner"],
          "createdOnDate": 1533752401000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 643,
          "sizeDeletions": -1
        },
        {
          "number": 39,
          "revision": "6955970637e509a9d53b6428c463c1fce2e01d3b",
          "parents": [
            "b383380735089719b120dd613eda4fcfa4ea55ff"
          ],
          "ref": "refs/changes/58/11558/39",
          "uploader": ids["agardner"],
          "createdOnDate": 1533752524000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1534597642000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1533752893000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 644,
          "sizeDeletions": -1
        },
        {
          "number": 40,
          "revision": "711d7b172fd724478ad5d3d2be362bdef5c8a925",
          "parents": [
            "027b69985bd4ca1a8cc711cc5215a7d67d99678c"
          ],
          "ref": "refs/changes/58/11558/40",
          "uploader": ids["agardner"],
          "createdOnDate": 1534789358000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534789741000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/autocorrectinfofile",
              "line": 18,
              "reviewer": ids["zxiiro"],
              "message": "I think the code would be a little more efficient if we swapped this around:\n\n DIR\u003d\"/tmp/...\"\n mkdir -p \"$DIR\"",
              "patchSetTimestamp": 1534789358000
            },
            {
              "file": "shell/autocorrectinfofile",
              "line": 18,
              "reviewer": ids["zxiiro"],
              "message": "Done",
              "patchSetTimestamp": 1534789358000
            }
          ],
          "sizeInsertions": 643,
          "sizeDeletions": 0
        },
        {
          "number": 41,
          "revision": "fdf3a3b8a61928af1968f3bf9714bc5a54d87fd8",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/58/11558/41",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534810972000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1534811321000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 663,
          "sizeDeletions": 0
        },
        {
          "number": 42,
          "revision": "a105a193cef48e604e8ce5b3e7f0dbd84ba31e6d",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/58/11558/42",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534811052000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1534811401000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 667,
          "sizeDeletions": 0
        },
        {
          "number": 43,
          "revision": "53f4104c41fae85bd558448a99570946b1d63990",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/58/11558/43",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534811532000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534812007000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 667,
          "sizeDeletions": 0
        },
        {
          "number": 44,
          "revision": "132c54d483d15c9fb9859b6eaeddefd227ecb046",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/58/11558/44",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534812025000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1534814449000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534812557000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "lftools/cli/infofile.py",
              "line": 32,
              "reviewer": ids["zxiiro"],
              "message": "Now that I understand this a bit more I think maybe calling this function \"get_committers\" is more accurate?",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 32,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 52,
              "reviewer": ids["zxiiro"],
              "message": "So the output we are providing it needs to be a properly formatted YAML?\n\nIn the case where only ID is printed it\u0027s not outputting a list item \"- id: uid\" instead it\u0027s just \"id: uid\" is this intended?",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 52,
              "reviewer": ids["agardner"],
              "message": "It\u0027s just output to be read by a human or parsed by a script (autocorrectinfofile) I don\u0027t see it living as valid yaml in a file.",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 54,
              "reviewer": ids["zxiiro"],
              "message": "Ok I think my original comment got misunderstood. Hopefully I\u0027ll be more clear this time. I didn\u0027t mean to add yet another if-statement to check that FULL and ID are passed.\n\nIf I understand the intent of this function correctly then it has 2 modes.\n\n1. --id is passed so return a single account\n2. --id is not passed so return all committers\n\nWithin 2) there is 2 states:\n\na. --full is passed so print name, email, and id\nb. --full is not passed so return only id\n\n\nI think this code would be a lot more cleaner. There\u0027s 2 parts to this:\n\nnew function declared above list_committers:\n\n    def print_committer_info(committer, full):\n        if full:\n            print(\"    - name: {}\".format(committer[\u0027name\u0027]))\n            print(\"      email: {}\".format(committer[\u0027email\u0027]))\n\n        print(\"      id: {}\".format(committer[\u0027id\u0027]))\n\nThis function handles printing both full and none full outputs.\n\nThe 2nd part the new loop:\n\n        for item in lookup:\n            if id:\n                if item[\u0027id\u0027] \u003d\u003d id:\n                    print_committer_info(item, True)\n                    break\n                else:\n                    continue\n\n            print_committer_info(item, full)\n\nThis loop is more clean and covers both cases of if we want to search for a single ID, vs print all of the IDs.",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 54,
              "reviewer": ids["agardner"],
              "message": "print_committer_info(item, full)\n\n-Also, done",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 66,
              "reviewer": ids["zxiiro"],
              "message": "This only deals with committers as far as I can tell. Maybe calling the function \"sync_committers\" would make more sense?",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 66,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 67,
              "reviewer": ids["zxiiro"],
              "message": "Sync\u0027s committer information from LDAP into INFO.yaml",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 67,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 79,
              "reviewer": ids["zxiiro"],
              "message": "Using \"with open\" syntax would be much better here.\n\n with open(info_file) as f:\n     info_data \u003d ryaml.load(f)\n with open(ldap_file) as f:\n     ldap_data \u003d ryaml.load(f)\n\nThis ensures that f.close() is appropriately called.",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/infofile.py",
              "line": 79,
              "reviewer": ids["agardner"],
              "message": "Done",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 11,
              "reviewer": ids["zxiiro"],
              "message": "I think this pydoc is not accurate. It works on more than just OPNFV right?",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 14,
              "reviewer": ids["zxiiro"],
              "message": "Would be easier to read like this:\n\nPrereqs:\n\n - yum install python-devel openldap-devel\n - pip install python-ldap",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "lftools/cli/ldap_cli.py",
              "line": 37,
              "reviewer": ids["zxiiro"],
              "message": "committers",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "releasenotes/notes/ldap-info-017df79c3c8f9585.yaml",
              "line": 8,
              "reviewer": ids["askb"],
              "message": "This is not an .rst file. Do we need the `.. code block::` here?",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "releasenotes/notes/ldap-info-017df79c3c8f9585.yaml",
              "line": 8,
              "reviewer": ids["zxiiro"],
              "message": "This is an RST file for our purposes. Reno generates RSTs from YAML via the Sphinx plugin.",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "releasenotes/notes/ldap-info-017df79c3c8f9585.yaml",
              "line": 19,
              "reviewer": ids["askb"],
              "message": "this is not an .rst file. Do we need the `.. code block::` here?",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "releasenotes/notes/ldap-info-017df79c3c8f9585.yaml",
              "line": 19,
              "reviewer": ids["zxiiro"],
              "message": "This is an RST file for our purposes. Reno generates RSTs from YAML via the Sphinx plugin.",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "shell/inactivecommitters",
              "line": 23,
              "reviewer": ids["askb"],
              "message": "optionally fix, shorter version: `date +%F`",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "shell/inactivecommitters",
              "line": 23,
              "reviewer": ids["zxiiro"],
              "message": "Personally I like %Y-%m-%d because it\u0027s clear what it means at a glance. %F I\u0027d have to Google and find out.",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "shell/inactivecommitters",
              "line": 37,
              "reviewer": ids["askb"],
              "message": "optionally fix, shorter version: `date +%F`",
              "patchSetTimestamp": 1534812025000
            },
            {
              "file": "shell/inactivecommitters",
              "line": 37,
              "reviewer": ids["zxiiro"],
              "message": "Personally I like %Y-%m-%d because it\u0027s clear what it means at a glance. %F I\u0027d have to Google and find out.",
              "patchSetTimestamp": 1534812025000
            }
          ],
          "sizeInsertions": 667,
          "sizeDeletions": 0
        },
        {
          "number": 45,
          "revision": "430f9b4fb43c99cc7dd984b6f7766e7c57f10c55",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/58/11558/45",
          "uploader": ids["agardner"],
          "createdOnDate": 1534877202000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534877663000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 670,
          "sizeDeletions": 0
        },
        {
          "number": 46,
          "revision": "4d7ce295121e166f2fb18417acd8f5193d4b382c",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/58/11558/46",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534887115000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1534888446000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535120394000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535120808000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534967664000,
              "grantedBy": ids["agardner"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534887525000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 670,
          "sizeDeletions": 0
        }
      ]
    }
  ],
  "addedAsReviewerTo": [
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I954835b3e1a1700119d2e2328444b7794e7365fc",
      "commitNumber": 12392,
      "subject": "Add ruamel.yaml and yaml as known 3rdparty",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12392",
      "commitMessage": "Add ruamel.yaml and yaml as known 3rdparty\n\nChange-Id: I954835b3e1a1700119d2e2328444b7794e7365fc\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535175607000,
      "lastUpdatedDate": 1535408614000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["agardner"],
        ids["bramwelt"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1535175607000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535175770000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/272/"
        },
        {
          "timestamp": 1535175999000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/272/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/272"
        },
        {
          "timestamp": 1535406993000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1535408614000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "37c20018f44522eb56a9d7d54ab9f4c35c6e19d8",
          "parents": [
            "3a409e15b5ad16715525fc86ad163f61b890645f"
          ],
          "ref": "refs/changes/92/12392/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535175607000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535408614000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535406993000,
              "grantedBy": ids["bramwelt"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535175999000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 5,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "Ie2206b43b094e1576936ba934268dc0b68fc5a40",
      "commitNumber": 12384,
      "subject": "Make ldap module optional",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12384",
      "commitMessage": "Make ldap module optional\n\nInstall via \u0027pip install lftools[ldap]\u0027.\n\nChange-Id: Ie2206b43b094e1576936ba934268dc0b68fc5a40\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1535125206000,
      "lastUpdatedDate": 1535126179000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["agardner"],
        ids["askb"]
      ],
      "comments": [
        {
          "timestamp": 1535125206000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1535125386000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/264/"
        },
        {
          "timestamp": 1535125446000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1535125583000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1535125654000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/264/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/264/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/264"
        },
        {
          "timestamp": 1535125661000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/265/"
        },
        {
          "timestamp": 1535125721000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/266/"
        },
        {
          "timestamp": 1535125947000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/265/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/265/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/265"
        },
        {
          "timestamp": 1535125982000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/266/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/266"
        },
        {
          "timestamp": 1535126134000,
          "reviewer": ids["askb"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1535126175000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1535126179000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "059200ecd459c98a639d31d2d303b3afa503ead3",
          "parents": [
            "58f28699725a52f14f70b44fd3c72243612d1ef9"
          ],
          "ref": "refs/changes/84/12384/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535125206000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535125654000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 26,
          "sizeDeletions": -3
        },
        {
          "number": 2,
          "revision": "bfc6a663b1996cbbfa777cf301a034de518b4afc",
          "parents": [
            "58f28699725a52f14f70b44fd3c72243612d1ef9"
          ],
          "ref": "refs/changes/84/12384/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535125446000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535125947000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 42,
          "sizeDeletions": -3
        },
        {
          "number": 3,
          "revision": "3a409e15b5ad16715525fc86ad163f61b890645f",
          "parents": [
            "58f28699725a52f14f70b44fd3c72243612d1ef9"
          ],
          "ref": "refs/changes/84/12384/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535125583000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1535126179000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535126175000,
              "grantedBy": ids["agardner"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1535126134000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535125982000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 43,
          "sizeDeletions": -3
        }
      ]
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 2,
        "approvalCount": 1,
        "commentCount": 0,
        "approvals": {
          "2": 1
        }
      }
    }
  ],
  "commentsWritten": [],
  "commentsReceived": [
    {
      "commit": {
        "project": "releng/lftools",
        "branch": "master",
        "id": "I4f4055441042d790008754bb085447f52e1c1a78",
        "commitNumber": 11558,
        "subject": "Extend lftools with scripts for ldap lookups",
        "owner": ids["agardner"],
        "url": "https://gerrit.linuxfoundation.org/infra/11558",
        "commitMessage": "Extend lftools with scripts for ldap lookups\n\nAdd 2 new commands to lftools:\n\n    - infofile\n    - ldap\n\nprereqs:\nFor ldap lookups to work you must be on the VPN and have the cert\nto get the cert: log in to any collab system and grab /etc/ipa/ca.crt\nin /etc/openldap/ldap.conf\n\nTLS_REQCERT always\nTLS_CACERTDIR /etc/openldap/certs\nTLS_CACERT /etc/openldap/certs/ca.crt\n\nTo test:\n\n1. Clone this patchset\n2. start venv\n\n   pip uninstall lftools \u0026\u0026 pip install -e .\n\nUsage:\n\n$ lftools ldap\nUsage: lftools ldap [OPTIONS] COMMAND [ARGS]...\n\n  LDAP TOOLS.\n\nCommands:\n  autocorrectinfofile  Verify INFO.yaml against LDAP group.\n  csv                  Query an Ldap server.\n  inactivecommitters   Check committer participation.\n  yaml4info            Build yaml of commiters for your INFO.yaml.\n\n$ lftools infofile\nUsage: lftools infofile [OPTIONS] COMMAND [ARGS]...\n\n  INFO.yaml TOOLS.\n\nCommands:\n  get-committers    Extract Committer info from INFO.yaml or LDAP...\n  sync-committers   Script to insert missing values from ldap...\n\nIssue: RELENG-407\nChange-Id: I4f4055441042d790008754bb085447f52e1c1a78\nSigned-off-by: Aric Gardner \u003cagardner@linuxfoundation.org\u003e\n",
        "createdOnDate": 1530040611000,
        "lastUpdatedDate": 1535120808000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["zxiiro"],
          ids["bramwelt"],
          ids["lf-jenkins"],
          ids["agrimberg"],
          ids["abaranov"],
          ids["agardner"],
          ids["askb"]
        ],
        "comments": [
          {
            "timestamp": 1530040611000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1530041032000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1530047425000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 3."
          },
          {
            "timestamp": 1530047712000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/117/"
          },
          {
            "timestamp": 1530047904000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/117/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/117/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/117"
          },
          {
            "timestamp": 1530056285000,
            "reviewer": ids["bramwelt"],
            "message": "Patch Set 3:\n\n(1 comment)"
          },
          {
            "timestamp": 1530122057000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 4."
          },
          {
            "timestamp": 1530122164000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/121/"
          },
          {
            "timestamp": 1530122375000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/121/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/121/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/121"
          },
          {
            "timestamp": 1530127564000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 5."
          },
          {
            "timestamp": 1530127845000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/122/"
          },
          {
            "timestamp": 1530128187000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/122/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/122/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/122"
          },
          {
            "timestamp": 1530128919000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 6."
          },
          {
            "timestamp": 1530129115000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 7."
          },
          {
            "timestamp": 1530129306000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/123/"
          },
          {
            "timestamp": 1530129505000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 7: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/123/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/123/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/123"
          },
          {
            "timestamp": 1530129989000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 8."
          },
          {
            "timestamp": 1530130045000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 9: Commit message was updated."
          },
          {
            "timestamp": 1530130271000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 10."
          },
          {
            "timestamp": 1530130281000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/124/"
          },
          {
            "timestamp": 1530130490000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 10: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/124/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/124/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/124"
          },
          {
            "timestamp": 1530231898000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 11."
          },
          {
            "timestamp": 1530232203000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 11:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/125/"
          },
          {
            "timestamp": 1530232343000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 12."
          },
          {
            "timestamp": 1530232371000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 11: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/125/ : ABORTED\n\nFile lftools/cli/parseinfofile.py is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/125/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/125"
          },
          {
            "timestamp": 1530232596000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 13."
          },
          {
            "timestamp": 1530232610000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 13:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/126/"
          },
          {
            "timestamp": 1530232821000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 13: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/126/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/126/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/126"
          },
          {
            "timestamp": 1530294687000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 14."
          },
          {
            "timestamp": 1530294738000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 14:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/129/"
          },
          {
            "timestamp": 1530294999000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 14: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/129/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/129/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/129"
          },
          {
            "timestamp": 1530295343000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 15."
          },
          {
            "timestamp": 1530295528000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 15:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/130/"
          },
          {
            "timestamp": 1530295780000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 15: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/130/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/130/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/130"
          },
          {
            "timestamp": 1530298507000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 16."
          },
          {
            "timestamp": 1530298741000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 16:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/131/"
          },
          {
            "timestamp": 1530298903000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 16: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/131/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/131/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/131"
          },
          {
            "timestamp": 1530301508000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 17."
          },
          {
            "timestamp": 1530301587000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 17:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/132/"
          },
          {
            "timestamp": 1530301796000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 17: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/132/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/132"
          },
          {
            "timestamp": 1530737816000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 18."
          },
          {
            "timestamp": 1530738107000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 18:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/139/"
          },
          {
            "timestamp": 1530738201000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 19."
          },
          {
            "timestamp": 1530738223000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 18: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/139/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/139/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/139"
          },
          {
            "timestamp": 1530738388000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 19:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/140/"
          },
          {
            "timestamp": 1530738553000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 19: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/140/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/140/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/140"
          },
          {
            "timestamp": 1530739121000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 20."
          },
          {
            "timestamp": 1530739407000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 20:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/141/"
          },
          {
            "timestamp": 1530739597000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 20: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/141/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/141/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/141"
          },
          {
            "timestamp": 1530808952000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 21."
          },
          {
            "timestamp": 1530809093000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 22."
          },
          {
            "timestamp": 1530809243000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 22:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/142/"
          },
          {
            "timestamp": 1530809477000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 22: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/142/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/142/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/142"
          },
          {
            "timestamp": 1530810620000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 23."
          },
          {
            "timestamp": 1530810705000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 23:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/143/"
          },
          {
            "timestamp": 1530810873000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 23: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/143/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/143/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/143"
          },
          {
            "timestamp": 1530811918000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 24."
          },
          {
            "timestamp": 1530812197000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 24:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/144/"
          },
          {
            "timestamp": 1530812385000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 24: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/144/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/144/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/144"
          },
          {
            "timestamp": 1530815279000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 25."
          },
          {
            "timestamp": 1530815529000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 25:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/145/"
          },
          {
            "timestamp": 1530815530000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 26."
          },
          {
            "timestamp": 1530815555000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 25: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/145/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/145/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/145"
          },
          {
            "timestamp": 1530815556000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 26:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/146/"
          },
          {
            "timestamp": 1530815701000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 26: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/146/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/146/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/146"
          },
          {
            "timestamp": 1530817028000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 27."
          },
          {
            "timestamp": 1530817296000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 27:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/147/"
          },
          {
            "timestamp": 1530817493000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 27: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/147/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/147"
          },
          {
            "timestamp": 1531180963000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 28."
          },
          {
            "timestamp": 1531181148000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 28:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/150/"
          },
          {
            "timestamp": 1531181387000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 28: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/150/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/150"
          },
          {
            "timestamp": 1531181550000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 28: Code-Review-1\n\n(5 comments)"
          },
          {
            "timestamp": 1531243076000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 29."
          },
          {
            "timestamp": 1531243336000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 29:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/151/"
          },
          {
            "timestamp": 1531243569000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 29: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/151/ : FAILURE\n\nFile shell/GrouplookupUser is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/151/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/151"
          },
          {
            "timestamp": 1531248808000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 30."
          },
          {
            "timestamp": 1531249097000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 30:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/152/"
          },
          {
            "timestamp": 1531249318000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 30: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/152/ : FAILURE\n\nFile shell/GrouplookupUser is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/152/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/152"
          },
          {
            "timestamp": 1531515261000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 31."
          },
          {
            "timestamp": 1531515546000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 31:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/178/"
          },
          {
            "timestamp": 1531515759000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 31: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/178/ : FAILURE\n\nFile shell/GrouplookupUser is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/178/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/178"
          },
          {
            "timestamp": 1531947666000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 32."
          },
          {
            "timestamp": 1531947760000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 32:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/189/"
          },
          {
            "timestamp": 1531947918000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 32: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/189/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/189/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/189"
          },
          {
            "timestamp": 1532028249000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 33."
          },
          {
            "timestamp": 1532028268000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 33:\n\n(1 comment)"
          },
          {
            "timestamp": 1532028437000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 33:\n\n(1 comment)"
          },
          {
            "timestamp": 1532028547000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 33:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/194/"
          },
          {
            "timestamp": 1532028715000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 33: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/194/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/194/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/194"
          },
          {
            "timestamp": 1532030753000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 34."
          },
          {
            "timestamp": 1532031045000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 34:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/195/"
          },
          {
            "timestamp": 1532031194000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 34: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/195/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/195/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/195"
          },
          {
            "timestamp": 1532113585000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 34:\n\nrecheck"
          },
          {
            "timestamp": 1532113689000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 34: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/198/"
          },
          {
            "timestamp": 1532113858000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 34: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/198/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/198/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/198"
          },
          {
            "timestamp": 1532368103000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 34:\n\nrecheck"
          },
          {
            "timestamp": 1532368407000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 34: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/199/"
          },
          {
            "timestamp": 1532368563000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 34: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/199/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/199/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/199"
          },
          {
            "timestamp": 1532440547000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 34:\n\nrecheck"
          },
          {
            "timestamp": 1532441297000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 34: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/201/"
          },
          {
            "timestamp": 1532441438000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 34: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/201/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/201/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/201"
          },
          {
            "timestamp": 1532566037000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 34: Code-Review-1\n\n(3 comments)\n\nCan we consistently use 4 space indents for the shell scripts so that they are easier to read?\n\nDo the ldap and info file changes need to be merged together? if not maybe we can break them out into 2 patches so that we can merge them faster / have smaller amounts of things to review.\n\nThis is fine as is too if it\u0027s too hard to do."
          },
          {
            "timestamp": 1532585365000,
            "reviewer": ids["askb"],
            "message": "Patch Set 34:\n\nrecheck"
          },
          {
            "timestamp": 1532585641000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 34: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/213/"
          },
          {
            "timestamp": 1532585847000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 34: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/213/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/213"
          },
          {
            "timestamp": 1532635275000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 35."
          },
          {
            "timestamp": 1532635380000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 35:\n\n@Thanh I would like to merge this together, the ldap script has no real value on its own."
          },
          {
            "timestamp": 1532635572000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 35:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/217/"
          },
          {
            "timestamp": 1532635783000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 35: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/217/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/217"
          },
          {
            "timestamp": 1532707297000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 35: Code-Review+1"
          },
          {
            "timestamp": 1532709797000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 35: Code-Review-1\n\n(35 comments)"
          },
          {
            "timestamp": 1533664193000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 36."
          },
          {
            "timestamp": 1533664269000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 36:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/233/"
          },
          {
            "timestamp": 1533664521000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 36: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/233/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/233"
          },
          {
            "timestamp": 1533752026000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 37."
          },
          {
            "timestamp": 1533752290000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 37:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/234/"
          },
          {
            "timestamp": 1533752401000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 38."
          },
          {
            "timestamp": 1533752425000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 37: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/234/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/234/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/234"
          },
          {
            "timestamp": 1533752439000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 38:\n\n(24 comments)"
          },
          {
            "timestamp": 1533752524000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 39."
          },
          {
            "timestamp": 1533752670000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 39:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/235/"
          },
          {
            "timestamp": 1533752689000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 39:\n\n(2 comments)"
          },
          {
            "timestamp": 1533752893000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 39: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/235/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/235"
          },
          {
            "timestamp": 1534597555000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 35:\n\n(1 comment)"
          },
          {
            "timestamp": 1534597642000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 39: Code-Review-1\n\nI\u0027d like to see that the bash functions are appropriately indented for readability."
          },
          {
            "timestamp": 1534789358000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 40."
          },
          {
            "timestamp": 1534789496000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 40:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/240/"
          },
          {
            "timestamp": 1534789741000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 40: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/240/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/240"
          },
          {
            "timestamp": 1534809564000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 35:\n\n(7 comments)"
          },
          {
            "timestamp": 1534810972000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 41."
          },
          {
            "timestamp": 1534811052000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 42."
          },
          {
            "timestamp": 1534811093000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 40:\n\n(3 comments)"
          },
          {
            "timestamp": 1534811137000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 41:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/241/"
          },
          {
            "timestamp": 1534811185000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 42:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/242/"
          },
          {
            "timestamp": 1534811321000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 41: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/241/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/241/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/241"
          },
          {
            "timestamp": 1534811401000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 42: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/242/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/242/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/242"
          },
          {
            "timestamp": 1534811532000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 43."
          },
          {
            "timestamp": 1534811591000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 35:\n\n(1 comment)"
          },
          {
            "timestamp": 1534811783000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 43:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/243/"
          },
          {
            "timestamp": 1534812007000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 43: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/243/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/243"
          },
          {
            "timestamp": 1534812025000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 44."
          },
          {
            "timestamp": 1534812257000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 44:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/244/"
          },
          {
            "timestamp": 1534812557000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 44: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/244/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/244"
          },
          {
            "timestamp": 1534814449000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 44: Code-Review-1\n\n(9 comments)\n\n@Aric, I made some minor changes but mainly updated to add the reno release notes file. Please check to make sure I didn\u0027t unintentionally break anything and review the release notes file. It should provide details on whatever an end user should know using the new tool.\n\nTake a look at https://docs.openstack.org/reno/latest/user/usage.html#editing-a-release-note for details on the release notes format and add any other fields you think might be important to add."
          },
          {
            "timestamp": 1534833148000,
            "reviewer": ids["askb"],
            "message": "Patch Set 44:\n\n(4 comments)\n\nsome initial comments, will test this and get back."
          },
          {
            "timestamp": 1534867053000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 44:\n\n(4 comments)"
          },
          {
            "timestamp": 1534877202000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 45."
          },
          {
            "timestamp": 1534877222000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 45:\n\n(6 comments)"
          },
          {
            "timestamp": 1534877465000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 45:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/245/"
          },
          {
            "timestamp": 1534877663000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 45: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/245/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/245"
          },
          {
            "timestamp": 1534887115000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 46."
          },
          {
            "timestamp": 1534887185000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 46:\n\nUpdated the docs to update the get-committers and sync-committers rename.\n\nAlso updated click command for get_committers and sync_committers to use dashes (get-committers and sync-committers) as using underscores in command names is ugly."
          },
          {
            "timestamp": 1534887245000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 46: Code-Review+1"
          },
          {
            "timestamp": 1534887308000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 46:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/246/"
          },
          {
            "timestamp": 1534887525000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 46: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/246/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/246"
          },
          {
            "timestamp": 1534888446000,
            "reviewer": ids["agrimberg"],
            "message": "Patch Set 46: Code-Review+1"
          },
          {
            "timestamp": 1534967664000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 46: Code-Review+2"
          },
          {
            "timestamp": 1535120394000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 46: Code-Review+2\n\nGoing to merge this since I\u0027d like to release lftools today. Further discussion and tweaks can be taken up on the mailing list / Jira."
          },
          {
            "timestamp": 1535120808000,
            "reviewer": ids["zxiiro"],
            "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "ad66772385d67ed29d455cc39939f16a15cf0768",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/1",
            "uploader": ids["agardner"],
            "createdOnDate": 1530040611000,
            "author": ids["agardner"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 132,
            "sizeDeletions": 0
          },
          {
            "number": 2,
            "revision": "4661cc083a5443fc43e075822639b80fd6b0fed4",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/2",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1530041032000,
            "author": ids["agardner"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 130,
            "sizeDeletions": 0
          },
          {
            "number": 3,
            "revision": "6cf84b9491ffa59bcc1ca94df4a780fe9891e2de",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/3",
            "uploader": ids["agardner"],
            "createdOnDate": 1530047425000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530047904000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 31,
                "reviewer": ids["bramwelt"],
                "message": "here",
                "patchSetTimestamp": 1530047425000
              }
            ],
            "sizeInsertions": 128,
            "sizeDeletions": 0
          },
          {
            "number": 4,
            "revision": "55defe1f6099c386237731e1a57d523875ddc8d7",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/4",
            "uploader": ids["agardner"],
            "createdOnDate": 1530122057000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530122375000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 132,
            "sizeDeletions": 0
          },
          {
            "number": 5,
            "revision": "d7a2b99f15d64cb90ea565ae8d7815d9fbfe74f2",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/5",
            "uploader": ids["agardner"],
            "createdOnDate": 1530127564000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530128187000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 195,
            "sizeDeletions": 0
          },
          {
            "number": 6,
            "revision": "afad36fab2e57679d683188eea3f5cd57f94748d",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/6",
            "uploader": ids["agardner"],
            "createdOnDate": 1530128919000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [],
            "comments": [
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 28,
                "reviewer": ids["zxiiro"],
                "message": "indent by 4 otherwise it\u0027s not affecting the def above. Python cares very much about indents :(",
                "patchSetTimestamp": 1530128919000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 141,
                "reviewer": ids["zxiiro"],
                "message": "These need to be spaces not tabs.",
                "patchSetTimestamp": 1530128919000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 149,
                "reviewer": ids["zxiiro"],
                "message": "Remove this.",
                "patchSetTimestamp": 1530128919000
              }
            ],
            "sizeInsertions": 214,
            "sizeDeletions": 0
          },
          {
            "number": 7,
            "revision": "c24ad9294486a72d1ad4b9a27b277ef932623a46",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/7",
            "uploader": ids["agardner"],
            "createdOnDate": 1530129115000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530129505000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 214,
            "sizeDeletions": 0
          },
          {
            "number": 8,
            "revision": "fa50468ff9f81a08176121dd83d6bfc5cc780f11",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/8",
            "uploader": ids["agardner"],
            "createdOnDate": 1530129989000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 215,
            "sizeDeletions": 0
          },
          {
            "number": 9,
            "revision": "060261733d07e7a9fc9124f3792b36ea18c4abc7",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/9",
            "uploader": ids["agardner"],
            "createdOnDate": 1530130045000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "NO_CODE_CHANGE",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 215,
            "sizeDeletions": 0
          },
          {
            "number": 10,
            "revision": "71ff6b3ae29e61d0b06036846b14f7798683aebf",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/10",
            "uploader": ids["agardner"],
            "createdOnDate": 1530130271000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530130490000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 216,
            "sizeDeletions": 0
          },
          {
            "number": 11,
            "revision": "ee6dffb7c44e9544cae3a828034ae18c5385cb48",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/11",
            "uploader": ids["agardner"],
            "createdOnDate": 1530231898000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530232371000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 355,
            "sizeDeletions": 0
          },
          {
            "number": 12,
            "revision": "1357154a9daf358d67b8810005b07eac1b2e3a8f",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/12",
            "uploader": ids["agardner"],
            "createdOnDate": 1530232343000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 355,
            "sizeDeletions": 0
          },
          {
            "number": 13,
            "revision": "4811b39667213e166902457ba5d7dc79bab66de8",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/13",
            "uploader": ids["agardner"],
            "createdOnDate": 1530232596000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530232821000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 366,
            "sizeDeletions": 0
          },
          {
            "number": 14,
            "revision": "67ea22f82025426906a9e8eb078b2edd78cab21f",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/14",
            "uploader": ids["agardner"],
            "createdOnDate": 1530294687000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530294999000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 342,
            "sizeDeletions": 0
          },
          {
            "number": 15,
            "revision": "9f070e5d0157fed342f4ffa12ccc5c6fa41a12c8",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/15",
            "uploader": ids["agardner"],
            "createdOnDate": 1530295343000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530295780000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 353,
            "sizeDeletions": 0
          },
          {
            "number": 16,
            "revision": "3296e2647a6509fdc3cf50e8bd644649cfdb215f",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/16",
            "uploader": ids["agardner"],
            "createdOnDate": 1530298507000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530298903000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 361,
            "sizeDeletions": 0
          },
          {
            "number": 17,
            "revision": "f94f62e34379dc9537d7644601b5b509050ef264",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/17",
            "uploader": ids["agardner"],
            "createdOnDate": 1530301508000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1530301796000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 357,
            "sizeDeletions": 0
          },
          {
            "number": 18,
            "revision": "17ab39836640351ab1d595c3ebd949f0194b832c",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/18",
            "uploader": ids["agardner"],
            "createdOnDate": 1530737816000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530738223000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 451,
            "sizeDeletions": 0
          },
          {
            "number": 19,
            "revision": "fca73170c22cb36172c9395bd5b9d97cb9da181e",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/19",
            "uploader": ids["agardner"],
            "createdOnDate": 1530738201000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530738553000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 451,
            "sizeDeletions": 0
          },
          {
            "number": 20,
            "revision": "c3cb60de5a8c46858af5b5dba10aad1687671c06",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/20",
            "uploader": ids["agardner"],
            "createdOnDate": 1530739121000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530739597000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 448,
            "sizeDeletions": 0
          },
          {
            "number": 21,
            "revision": "9d65e5536e22142b83cc4e9f6ab28cd2c1830812",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/21",
            "uploader": ids["agardner"],
            "createdOnDate": 1530808952000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 466,
            "sizeDeletions": -291
          },
          {
            "number": 22,
            "revision": "844945c96b0288a516c2d0fe4b6be1a49715417f",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/22",
            "uploader": ids["agardner"],
            "createdOnDate": 1530809093000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530809477000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 466,
            "sizeDeletions": 0
          },
          {
            "number": 23,
            "revision": "65f29eeb9e224d96b57b2e100f4e56d5906650b5",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/23",
            "uploader": ids["agardner"],
            "createdOnDate": 1530810620000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530810873000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 467,
            "sizeDeletions": 0
          },
          {
            "number": 24,
            "revision": "6e47fc07a7dd9c009c73cf0d4b68e65ea6ee6205",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/24",
            "uploader": ids["agardner"],
            "createdOnDate": 1530811918000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530812385000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 457,
            "sizeDeletions": 0
          },
          {
            "number": 25,
            "revision": "2cd2cec8203e8269ceb5221072ec902217311de8",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/25",
            "uploader": ids["agardner"],
            "createdOnDate": 1530815279000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530815555000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 543,
            "sizeDeletions": 0
          },
          {
            "number": 26,
            "revision": "28baea74b56ae564ff807648a24b1b77ee5ec505",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/26",
            "uploader": ids["agardner"],
            "createdOnDate": 1530815530000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1530815701000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 545,
            "sizeDeletions": 0
          },
          {
            "number": 27,
            "revision": "8240a1056302d79af15a84120a0f435642ddb7c1",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/27",
            "uploader": ids["agardner"],
            "createdOnDate": 1530817028000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1530817493000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 541,
            "sizeDeletions": 0
          },
          {
            "number": 28,
            "revision": "1b9695dc80853e0a4c52a392bfa5d7fb7cab4249",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/28",
            "uploader": ids["agardner"],
            "createdOnDate": 1531180963000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1531181550000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1531181387000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "lftools/cli/__init__.py",
                "line": 22,
                "reviewer": ids["zxiiro"],
                "message": "I think the parseinfofile and correctinfofile should be merged into a single infofile command. Something like:\n\n lftools info correct|parse [args]",
                "patchSetTimestamp": 1531180963000
              },
              {
                "file": "lftools/cli/__init__.py",
                "line": 22,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1531180963000
              },
              {
                "file": "requirements.txt",
                "line": 5,
                "reviewer": ids["zxiiro"],
                "message": "What\u0027s this providing that we cannot achieve with the regular PyYAML import?",
                "patchSetTimestamp": 1531180963000
              },
              {
                "file": "requirements.txt",
                "line": 5,
                "reviewer": ids["agardner"],
                "message": "I am reading and then writing back to the YAML files",
                "patchSetTimestamp": 1531180963000
              }
            ],
            "sizeInsertions": 590,
            "sizeDeletions": 0
          },
          {
            "number": 29,
            "revision": "aa859be1eb04df4255376283eafd200949b85f11",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/29",
            "uploader": ids["agardner"],
            "createdOnDate": 1531243076000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1531243569000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 854,
            "sizeDeletions": 0
          },
          {
            "number": 30,
            "revision": "57d39cdf98ad2c3bad6821cdb018283d5511295d",
            "parents": [
              "2c2b219f270bee5901a54a22ae30a9717d9577f3"
            ],
            "ref": "refs/changes/58/11558/30",
            "uploader": ids["agardner"],
            "createdOnDate": 1531248808000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1531249318000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 874,
            "sizeDeletions": 0
          },
          {
            "number": 31,
            "revision": "66b53262e3a4c3a41d5be15e7f48eb2824b93581",
            "parents": [
              "e3fd906d098ba9c75cd16dfdca895e58b37b65b7"
            ],
            "ref": "refs/changes/58/11558/31",
            "uploader": ids["agardner"],
            "createdOnDate": 1531515261000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1531515759000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 1159,
            "sizeDeletions": 0
          },
          {
            "number": 32,
            "revision": "1075f4602e033d321d68c6a7b970ec8ddf555029",
            "parents": [
              "e3fd906d098ba9c75cd16dfdca895e58b37b65b7"
            ],
            "ref": "refs/changes/58/11558/32",
            "uploader": ids["agardner"],
            "createdOnDate": 1531947666000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1531947918000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 1193,
            "sizeDeletions": 0
          },
          {
            "number": 33,
            "revision": "8502142c50972e360eeacb2b5052dd1a46b1a2b2",
            "parents": [
              "e3fd906d098ba9c75cd16dfdca895e58b37b65b7"
            ],
            "ref": "refs/changes/58/11558/33",
            "uploader": ids["agardner"],
            "createdOnDate": 1532028249000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1532028715000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 1227,
            "sizeDeletions": 0
          },
          {
            "number": 34,
            "revision": "54b7e2b803896741f6dca93754f147f97e40c1c4",
            "parents": [
              "e3fd906d098ba9c75cd16dfdca895e58b37b65b7"
            ],
            "ref": "refs/changes/58/11558/34",
            "uploader": ids["agardner"],
            "createdOnDate": 1532030753000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1532566037000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1532585847000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "shell/autocorrectinfofile",
                "line": 4,
                "reviewer": ids["zxiiro"],
                "message": "2018 right? or are this imported files?",
                "patchSetTimestamp": 1532030753000
              },
              {
                "file": "shell/inactivecommitters",
                "line": 4,
                "reviewer": ids["zxiiro"],
                "message": "2018 right? or are this imported files?",
                "patchSetTimestamp": 1532030753000
              },
              {
                "file": "shell/yaml4info",
                "line": 4,
                "reviewer": ids["zxiiro"],
                "message": "2018 right? or are this imported files?",
                "patchSetTimestamp": 1532030753000
              },
              {
                "file": "shell/yaml4info",
                "line": 4,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532030753000
              }
            ],
            "sizeInsertions": 676,
            "sizeDeletions": 0
          },
          {
            "number": 35,
            "revision": "fe33c666e9adb9b0c4625c7055a31f40c1ebc4e5",
            "parents": [
              "e3fd906d098ba9c75cd16dfdca895e58b37b65b7"
            ],
            "ref": "refs/changes/58/11558/35",
            "uploader": ids["agardner"],
            "createdOnDate": 1532635275000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1532709797000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1532707297000,
                "grantedBy": ids["agardner"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1532635783000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "lftools/cli/infofile.py",
                "line": 26,
                "reviewer": ids["zxiiro"],
                "message": "If there\u0027s no envvar just don\u0027t include the definition.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 26,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 27,
                "reviewer": ids["zxiiro"],
                "message": "This doesn\u0027t look optional. I would use click.argument in this case so that you call the command as: parse FILE --params",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 27,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 28,
                "reviewer": ids["zxiiro"],
                "message": "Should this actually be a \"bool\" then? seems like that\u0027s how it\u0027s used below.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 28,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 31,
                "reviewer": ids["zxiiro"],
                "message": "LFID",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 31,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 42,
                "reviewer": ids["zxiiro"],
                "message": "Unnecessary, if lookup is [] then the for loop below won\u0027t execute anyway.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 42,
                "reviewer": ids["agardner"],
                "message": "yeah this was for some error correction i mean to add, fixed in the latest patchset",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 54,
                "reviewer": ids["zxiiro"],
                "message": "I think the if logic up here doesn\u0027t make sense.\n\n1. Full seems to take precedence over everything. So if someone says --full --id abc123, then it will loop the lookup for all results not just for the one id.\n\nThese 2 switches should be mutually exclusive right?\n\nSo if someone passes an ID then it will only print the ID of that person, otherwise use the loop to iterate over all committers.\n\nRegardless of the above statement, if someone passes --full then print all of the info, otherwise only print the id field.\n\nTo me this sounds like we need 2 sets of if-statements.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 54,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 54,
                "reviewer": ids["zxiiro"],
                "message": "Not sure this is addressed. Let me do a fresh comment on the latest change though.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 60,
                "reviewer": ids["zxiiro"],
                "message": "If there is no envvar just don\u0027t declare it.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 60,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 65,
                "reviewer": ids["zxiiro"],
                "message": "For the above 3 settings none of them are optional so I think we should use click.arguments instead so that the command becomes:\n\n correct info_file ldap_file user_id [--repo NAME]",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 65,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 67,
                "reviewer": ids["zxiiro"],
                "message": "What is the context for the repo name? is it a repo in ldap or what?",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 67,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 67,
                "reviewer": ids["zxiiro"],
                "message": "I don\u0027t think this is addressed. I still don\u0027t understand the context of the repo name?",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 69,
                "reviewer": ids["zxiiro"],
                "message": "info_file",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 69,
                "reviewer": ids["zxiiro"],
                "message": "ldap_file",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 69,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 81,
                "reviewer": ids["zxiiro"],
                "message": "info_data\n\nwould be more clear.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 81,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 81,
                "reviewer": ids["zxiiro"],
                "message": "Wasn\u0027t addressed.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 82,
                "reviewer": ids["zxiiro"],
                "message": "ldap_data would be more clear.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 82,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 82,
                "reviewer": ids["zxiiro"],
                "message": "Wasn\u0027t addressed.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 82,
                "reviewer": ids["zxiiro"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 105,
                "reviewer": ids["zxiiro"],
                "message": "committer*",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 105,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 107,
                "reviewer": ids["zxiiro"],
                "message": "I\u0027m not entirely sure what this if-statement is doing. seems like there is no code at all after it so there\u0027s nothing to break from. Did you mean to put this above the data line previously? or should it just be removed entirely?",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 107,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 109,
                "reviewer": ids["zxiiro"],
                "message": "unnecessary else statement the continue is implied since there\u0027s nothing after.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 109,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 121,
                "reviewer": ids["zxiiro"],
                "message": "Use the with open() pattern instead of f.close()",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 121,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 121,
                "reviewer": ids["zxiiro"],
                "message": "This wasn\u0027t addressed.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 121,
                "reviewer": ids["zxiiro"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 34,
                "reviewer": ids["zxiiro"],
                "message": "should be click.argument if this is not optional.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 34,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 36,
                "reviewer": ids["zxiiro"],
                "message": "What is groups? is it 1 group? or if I can pass more than 1 what\u0027s the format?\n\nI think it\u0027s a better user experience if hte command is like this:\n\n yaml4info group [...]\n\nwhere you can keep passing space separated list of groups to parse (assuming this supports passing more than 1?)",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 36,
                "reviewer": ids["agardner"],
                "message": "not sure how to do this",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 43,
                "reviewer": ids["zxiiro"],
                "message": "Would be more clear as gerrit-url",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 43,
                "reviewer": ids["agardner"],
                "message": "it doesnt seem to like -\u0027s in the option name",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 43,
                "reviewer": ids["zxiiro"],
                "message": "huh... really? odd :/",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 43,
                "reviewer": ids["zxiiro"],
                "message": "This works: \u0027--gerrit-url\u0027\n\nWhen it turns into a variable it becomes gerrit_url which is probably why you were having issues. I\u0027ve updated this in the latest patch.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 46,
                "reviewer": ids["zxiiro"],
                "message": "if these options are not actually optional I think it would be better if the format of the command was:\n\n inactivecommitters URL GROUP",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 46,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 55,
                "reviewer": ids["zxiiro"],
                "message": "GERRIT_CLONE_BASE",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 55,
                "reviewer": ids["zxiiro"],
                "message": "--gerrit-clone-base",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 57,
                "reviewer": ids["zxiiro"],
                "message": "LDAP_GROUP",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 57,
                "reviewer": ids["zxiiro"],
                "message": "--ldap-group",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 64,
                "reviewer": ids["zxiiro"],
                "message": "We shouldn\u0027t use click.option() for required arguments that have no default value. Use click.argument instead.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 64,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 73,
                "reviewer": ids["zxiiro"],
                "message": "--ldap-server",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 75,
                "reviewer": ids["zxiiro"],
                "message": "--ldap-user-base",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 77,
                "reviewer": ids["zxiiro"],
                "message": "--ldap-group-base",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 79,
                "reviewer": ids["zxiiro"],
                "message": "We should use a click.argument() that accepts a space separated list of inputs like:\n\n csv GROUP [...]",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 79,
                "reviewer": ids["agardner"],
                "message": "not sure how to do this..",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/parseinfofile.py",
                "line": 0,
                "reviewer": ids["zxiiro"],
                "message": "I think we forgot to delete this file? It\u0027s in the infofile.py now right?",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "lftools/cli/parseinfofile.py",
                "line": 0,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "setup.py",
                "line": 63,
                "reviewer": ids["zxiiro"],
                "message": "Alphabetical order please.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "shell/autocorrectinfofile",
                "line": 19,
                "reviewer": ids["zxiiro"],
                "message": "can we put it in /tmp/infofile/\u003cfiles\u003e instead. That way our /tmp directory does not get cluttered by a bunch of output from a single application.",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "shell/autocorrectinfofile",
                "line": 19,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "shell/autocorrectinfofile",
                "line": 20,
                "reviewer": ids["zxiiro"],
                "message": "4 space indent these functions (below as well, and in the other shell files)..",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "shell/autocorrectinfofile",
                "line": 20,
                "reviewer": ids["agardner"],
                "message": "I would not normally do this, do we have a style guide I can follow?",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "shell/autocorrectinfofile",
                "line": 20,
                "reviewer": ids["zxiiro"],
                "message": "No, we should make one though. However in general most of our scripts use 4 space indents.\n\nRegardless of 4 or 2 space indents though we should indent functions for readability:\n\n func1() {\n     echo hello\n     echo world\n }",
                "patchSetTimestamp": 1532635275000
              },
              {
                "file": "shell/yaml4info",
                "line": 47,
                "reviewer": ids["zxiiro"],
                "message": "move this down a line.",
                "patchSetTimestamp": 1532635275000
              }
            ],
            "sizeInsertions": 676,
            "sizeDeletions": 0
          },
          {
            "number": 36,
            "revision": "e38334b2dacc7da9289d2c6a766af700206fcf78",
            "parents": [
              "b383380735089719b120dd613eda4fcfa4ea55ff"
            ],
            "ref": "refs/changes/58/11558/36",
            "uploader": ids["agardner"],
            "createdOnDate": 1533664193000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1533664521000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 673,
            "sizeDeletions": -1
          },
          {
            "number": 37,
            "revision": "f64b28c446f86090457c15e40b6d5b6b142e3fe4",
            "parents": [
              "b383380735089719b120dd613eda4fcfa4ea55ff"
            ],
            "ref": "refs/changes/58/11558/37",
            "uploader": ids["agardner"],
            "createdOnDate": 1533752026000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1533752425000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 691,
            "sizeDeletions": -1
          },
          {
            "number": 38,
            "revision": "f2f2cf0c971d650ed6319e671de3ffab687b98bc",
            "parents": [
              "b383380735089719b120dd613eda4fcfa4ea55ff"
            ],
            "ref": "refs/changes/58/11558/38",
            "uploader": ids["agardner"],
            "createdOnDate": 1533752401000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 643,
            "sizeDeletions": -1
          },
          {
            "number": 39,
            "revision": "6955970637e509a9d53b6428c463c1fce2e01d3b",
            "parents": [
              "b383380735089719b120dd613eda4fcfa4ea55ff"
            ],
            "ref": "refs/changes/58/11558/39",
            "uploader": ids["agardner"],
            "createdOnDate": 1533752524000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1534597642000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1533752893000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 644,
            "sizeDeletions": -1
          },
          {
            "number": 40,
            "revision": "711d7b172fd724478ad5d3d2be362bdef5c8a925",
            "parents": [
              "027b69985bd4ca1a8cc711cc5215a7d67d99678c"
            ],
            "ref": "refs/changes/58/11558/40",
            "uploader": ids["agardner"],
            "createdOnDate": 1534789358000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1534789741000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "shell/autocorrectinfofile",
                "line": 18,
                "reviewer": ids["zxiiro"],
                "message": "I think the code would be a little more efficient if we swapped this around:\n\n DIR\u003d\"/tmp/...\"\n mkdir -p \"$DIR\"",
                "patchSetTimestamp": 1534789358000
              },
              {
                "file": "shell/autocorrectinfofile",
                "line": 18,
                "reviewer": ids["zxiiro"],
                "message": "Done",
                "patchSetTimestamp": 1534789358000
              }
            ],
            "sizeInsertions": 643,
            "sizeDeletions": 0
          },
          {
            "number": 41,
            "revision": "fdf3a3b8a61928af1968f3bf9714bc5a54d87fd8",
            "parents": [
              "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
            ],
            "ref": "refs/changes/58/11558/41",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534810972000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1534811321000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 663,
            "sizeDeletions": 0
          },
          {
            "number": 42,
            "revision": "a105a193cef48e604e8ce5b3e7f0dbd84ba31e6d",
            "parents": [
              "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
            ],
            "ref": "refs/changes/58/11558/42",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534811052000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1534811401000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 667,
            "sizeDeletions": 0
          },
          {
            "number": 43,
            "revision": "53f4104c41fae85bd558448a99570946b1d63990",
            "parents": [
              "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
            ],
            "ref": "refs/changes/58/11558/43",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534811532000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1534812007000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 667,
            "sizeDeletions": 0
          },
          {
            "number": 44,
            "revision": "132c54d483d15c9fb9859b6eaeddefd227ecb046",
            "parents": [
              "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
            ],
            "ref": "refs/changes/58/11558/44",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534812025000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1534814449000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1534812557000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "lftools/cli/infofile.py",
                "line": 32,
                "reviewer": ids["zxiiro"],
                "message": "Now that I understand this a bit more I think maybe calling this function \"get_committers\" is more accurate?",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 32,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 52,
                "reviewer": ids["zxiiro"],
                "message": "So the output we are providing it needs to be a properly formatted YAML?\n\nIn the case where only ID is printed it\u0027s not outputting a list item \"- id: uid\" instead it\u0027s just \"id: uid\" is this intended?",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 52,
                "reviewer": ids["agardner"],
                "message": "It\u0027s just output to be read by a human or parsed by a script (autocorrectinfofile) I don\u0027t see it living as valid yaml in a file.",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 54,
                "reviewer": ids["zxiiro"],
                "message": "Ok I think my original comment got misunderstood. Hopefully I\u0027ll be more clear this time. I didn\u0027t mean to add yet another if-statement to check that FULL and ID are passed.\n\nIf I understand the intent of this function correctly then it has 2 modes.\n\n1. --id is passed so return a single account\n2. --id is not passed so return all committers\n\nWithin 2) there is 2 states:\n\na. --full is passed so print name, email, and id\nb. --full is not passed so return only id\n\n\nI think this code would be a lot more cleaner. There\u0027s 2 parts to this:\n\nnew function declared above list_committers:\n\n    def print_committer_info(committer, full):\n        if full:\n            print(\"    - name: {}\".format(committer[\u0027name\u0027]))\n            print(\"      email: {}\".format(committer[\u0027email\u0027]))\n\n        print(\"      id: {}\".format(committer[\u0027id\u0027]))\n\nThis function handles printing both full and none full outputs.\n\nThe 2nd part the new loop:\n\n        for item in lookup:\n            if id:\n                if item[\u0027id\u0027] \u003d\u003d id:\n                    print_committer_info(item, True)\n                    break\n                else:\n                    continue\n\n            print_committer_info(item, full)\n\nThis loop is more clean and covers both cases of if we want to search for a single ID, vs print all of the IDs.",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 54,
                "reviewer": ids["agardner"],
                "message": "print_committer_info(item, full)\n\n-Also, done",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 66,
                "reviewer": ids["zxiiro"],
                "message": "This only deals with committers as far as I can tell. Maybe calling the function \"sync_committers\" would make more sense?",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 66,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 67,
                "reviewer": ids["zxiiro"],
                "message": "Sync\u0027s committer information from LDAP into INFO.yaml",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 67,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 79,
                "reviewer": ids["zxiiro"],
                "message": "Using \"with open\" syntax would be much better here.\n\n with open(info_file) as f:\n     info_data \u003d ryaml.load(f)\n with open(ldap_file) as f:\n     ldap_data \u003d ryaml.load(f)\n\nThis ensures that f.close() is appropriately called.",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/infofile.py",
                "line": 79,
                "reviewer": ids["agardner"],
                "message": "Done",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 11,
                "reviewer": ids["zxiiro"],
                "message": "I think this pydoc is not accurate. It works on more than just OPNFV right?",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 14,
                "reviewer": ids["zxiiro"],
                "message": "Would be easier to read like this:\n\nPrereqs:\n\n - yum install python-devel openldap-devel\n - pip install python-ldap",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "lftools/cli/ldap_cli.py",
                "line": 37,
                "reviewer": ids["zxiiro"],
                "message": "committers",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "releasenotes/notes/ldap-info-017df79c3c8f9585.yaml",
                "line": 8,
                "reviewer": ids["askb"],
                "message": "This is not an .rst file. Do we need the `.. code block::` here?",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "releasenotes/notes/ldap-info-017df79c3c8f9585.yaml",
                "line": 8,
                "reviewer": ids["zxiiro"],
                "message": "This is an RST file for our purposes. Reno generates RSTs from YAML via the Sphinx plugin.",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "releasenotes/notes/ldap-info-017df79c3c8f9585.yaml",
                "line": 19,
                "reviewer": ids["askb"],
                "message": "this is not an .rst file. Do we need the `.. code block::` here?",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "releasenotes/notes/ldap-info-017df79c3c8f9585.yaml",
                "line": 19,
                "reviewer": ids["zxiiro"],
                "message": "This is an RST file for our purposes. Reno generates RSTs from YAML via the Sphinx plugin.",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "shell/inactivecommitters",
                "line": 23,
                "reviewer": ids["askb"],
                "message": "optionally fix, shorter version: `date +%F`",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "shell/inactivecommitters",
                "line": 23,
                "reviewer": ids["zxiiro"],
                "message": "Personally I like %Y-%m-%d because it\u0027s clear what it means at a glance. %F I\u0027d have to Google and find out.",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "shell/inactivecommitters",
                "line": 37,
                "reviewer": ids["askb"],
                "message": "optionally fix, shorter version: `date +%F`",
                "patchSetTimestamp": 1534812025000
              },
              {
                "file": "shell/inactivecommitters",
                "line": 37,
                "reviewer": ids["zxiiro"],
                "message": "Personally I like %Y-%m-%d because it\u0027s clear what it means at a glance. %F I\u0027d have to Google and find out.",
                "patchSetTimestamp": 1534812025000
              }
            ],
            "sizeInsertions": 667,
            "sizeDeletions": 0
          },
          {
            "number": 45,
            "revision": "430f9b4fb43c99cc7dd984b6f7766e7c57f10c55",
            "parents": [
              "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
            ],
            "ref": "refs/changes/58/11558/45",
            "uploader": ids["agardner"],
            "createdOnDate": 1534877202000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1534877663000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 670,
            "sizeDeletions": 0
          },
          {
            "number": 46,
            "revision": "4d7ce295121e166f2fb18417acd8f5193d4b382c",
            "parents": [
              "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
            ],
            "ref": "refs/changes/58/11558/46",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1534887115000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1534888446000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1535120394000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1535120808000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1534967664000,
                "grantedBy": ids["agardner"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1534887525000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 670,
            "sizeDeletions": 0
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 31,
          "reviewer": ids["bramwelt"],
          "message": "here",
          "patchSetTimestamp": 1530047425000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 28,
          "reviewer": ids["zxiiro"],
          "message": "indent by 4 otherwise it\u0027s not affecting the def above. Python cares very much about indents :(",
          "patchSetTimestamp": 1530128919000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 141,
          "reviewer": ids["zxiiro"],
          "message": "These need to be spaces not tabs.",
          "patchSetTimestamp": 1530128919000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 149,
          "reviewer": ids["zxiiro"],
          "message": "Remove this.",
          "patchSetTimestamp": 1530128919000
        },
        {
          "file": "lftools/cli/__init__.py",
          "line": 22,
          "reviewer": ids["zxiiro"],
          "message": "I think the parseinfofile and correctinfofile should be merged into a single infofile command. Something like:\n\n lftools info correct|parse [args]",
          "patchSetTimestamp": 1531180963000
        },
        {
          "file": "requirements.txt",
          "line": 5,
          "reviewer": ids["zxiiro"],
          "message": "What\u0027s this providing that we cannot achieve with the regular PyYAML import?",
          "patchSetTimestamp": 1531180963000
        },
        {
          "file": "shell/autocorrectinfofile",
          "line": 4,
          "reviewer": ids["zxiiro"],
          "message": "2018 right? or are this imported files?",
          "patchSetTimestamp": 1532030753000
        },
        {
          "file": "shell/inactivecommitters",
          "line": 4,
          "reviewer": ids["zxiiro"],
          "message": "2018 right? or are this imported files?",
          "patchSetTimestamp": 1532030753000
        },
        {
          "file": "shell/yaml4info",
          "line": 4,
          "reviewer": ids["zxiiro"],
          "message": "2018 right? or are this imported files?",
          "patchSetTimestamp": 1532030753000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 26,
          "reviewer": ids["zxiiro"],
          "message": "If there\u0027s no envvar just don\u0027t include the definition.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 27,
          "reviewer": ids["zxiiro"],
          "message": "This doesn\u0027t look optional. I would use click.argument in this case so that you call the command as: parse FILE --params",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 28,
          "reviewer": ids["zxiiro"],
          "message": "Should this actually be a \"bool\" then? seems like that\u0027s how it\u0027s used below.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 31,
          "reviewer": ids["zxiiro"],
          "message": "LFID",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 42,
          "reviewer": ids["zxiiro"],
          "message": "Unnecessary, if lookup is [] then the for loop below won\u0027t execute anyway.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 54,
          "reviewer": ids["zxiiro"],
          "message": "I think the if logic up here doesn\u0027t make sense.\n\n1. Full seems to take precedence over everything. So if someone says --full --id abc123, then it will loop the lookup for all results not just for the one id.\n\nThese 2 switches should be mutually exclusive right?\n\nSo if someone passes an ID then it will only print the ID of that person, otherwise use the loop to iterate over all committers.\n\nRegardless of the above statement, if someone passes --full then print all of the info, otherwise only print the id field.\n\nTo me this sounds like we need 2 sets of if-statements.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 54,
          "reviewer": ids["zxiiro"],
          "message": "Not sure this is addressed. Let me do a fresh comment on the latest change though.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 60,
          "reviewer": ids["zxiiro"],
          "message": "If there is no envvar just don\u0027t declare it.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 65,
          "reviewer": ids["zxiiro"],
          "message": "For the above 3 settings none of them are optional so I think we should use click.arguments instead so that the command becomes:\n\n correct info_file ldap_file user_id [--repo NAME]",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 67,
          "reviewer": ids["zxiiro"],
          "message": "What is the context for the repo name? is it a repo in ldap or what?",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 67,
          "reviewer": ids["zxiiro"],
          "message": "I don\u0027t think this is addressed. I still don\u0027t understand the context of the repo name?",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 69,
          "reviewer": ids["zxiiro"],
          "message": "info_file",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 69,
          "reviewer": ids["zxiiro"],
          "message": "ldap_file",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 81,
          "reviewer": ids["zxiiro"],
          "message": "info_data\n\nwould be more clear.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 81,
          "reviewer": ids["zxiiro"],
          "message": "Wasn\u0027t addressed.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 82,
          "reviewer": ids["zxiiro"],
          "message": "ldap_data would be more clear.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 82,
          "reviewer": ids["zxiiro"],
          "message": "Wasn\u0027t addressed.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 82,
          "reviewer": ids["zxiiro"],
          "message": "Done",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 105,
          "reviewer": ids["zxiiro"],
          "message": "committer*",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 107,
          "reviewer": ids["zxiiro"],
          "message": "I\u0027m not entirely sure what this if-statement is doing. seems like there is no code at all after it so there\u0027s nothing to break from. Did you mean to put this above the data line previously? or should it just be removed entirely?",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 109,
          "reviewer": ids["zxiiro"],
          "message": "unnecessary else statement the continue is implied since there\u0027s nothing after.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 121,
          "reviewer": ids["zxiiro"],
          "message": "Use the with open() pattern instead of f.close()",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 121,
          "reviewer": ids["zxiiro"],
          "message": "This wasn\u0027t addressed.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 121,
          "reviewer": ids["zxiiro"],
          "message": "Done",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 34,
          "reviewer": ids["zxiiro"],
          "message": "should be click.argument if this is not optional.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 36,
          "reviewer": ids["zxiiro"],
          "message": "What is groups? is it 1 group? or if I can pass more than 1 what\u0027s the format?\n\nI think it\u0027s a better user experience if hte command is like this:\n\n yaml4info group [...]\n\nwhere you can keep passing space separated list of groups to parse (assuming this supports passing more than 1?)",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 43,
          "reviewer": ids["zxiiro"],
          "message": "Would be more clear as gerrit-url",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 43,
          "reviewer": ids["zxiiro"],
          "message": "huh... really? odd :/",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 43,
          "reviewer": ids["zxiiro"],
          "message": "This works: \u0027--gerrit-url\u0027\n\nWhen it turns into a variable it becomes gerrit_url which is probably why you were having issues. I\u0027ve updated this in the latest patch.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 46,
          "reviewer": ids["zxiiro"],
          "message": "if these options are not actually optional I think it would be better if the format of the command was:\n\n inactivecommitters URL GROUP",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 55,
          "reviewer": ids["zxiiro"],
          "message": "GERRIT_CLONE_BASE",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 55,
          "reviewer": ids["zxiiro"],
          "message": "--gerrit-clone-base",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 57,
          "reviewer": ids["zxiiro"],
          "message": "LDAP_GROUP",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 57,
          "reviewer": ids["zxiiro"],
          "message": "--ldap-group",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 64,
          "reviewer": ids["zxiiro"],
          "message": "We shouldn\u0027t use click.option() for required arguments that have no default value. Use click.argument instead.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 73,
          "reviewer": ids["zxiiro"],
          "message": "--ldap-server",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 75,
          "reviewer": ids["zxiiro"],
          "message": "--ldap-user-base",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 77,
          "reviewer": ids["zxiiro"],
          "message": "--ldap-group-base",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 79,
          "reviewer": ids["zxiiro"],
          "message": "We should use a click.argument() that accepts a space separated list of inputs like:\n\n csv GROUP [...]",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "lftools/cli/parseinfofile.py",
          "line": 0,
          "reviewer": ids["zxiiro"],
          "message": "I think we forgot to delete this file? It\u0027s in the infofile.py now right?",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "setup.py",
          "line": 63,
          "reviewer": ids["zxiiro"],
          "message": "Alphabetical order please.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "shell/autocorrectinfofile",
          "line": 19,
          "reviewer": ids["zxiiro"],
          "message": "can we put it in /tmp/infofile/\u003cfiles\u003e instead. That way our /tmp directory does not get cluttered by a bunch of output from a single application.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "shell/autocorrectinfofile",
          "line": 20,
          "reviewer": ids["zxiiro"],
          "message": "4 space indent these functions (below as well, and in the other shell files)..",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "shell/autocorrectinfofile",
          "line": 20,
          "reviewer": ids["zxiiro"],
          "message": "No, we should make one though. However in general most of our scripts use 4 space indents.\n\nRegardless of 4 or 2 space indents though we should indent functions for readability:\n\n func1() {\n     echo hello\n     echo world\n }",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "shell/yaml4info",
          "line": 47,
          "reviewer": ids["zxiiro"],
          "message": "move this down a line.",
          "patchSetTimestamp": 1532635275000
        },
        {
          "file": "shell/autocorrectinfofile",
          "line": 18,
          "reviewer": ids["zxiiro"],
          "message": "I think the code would be a little more efficient if we swapped this around:\n\n DIR\u003d\"/tmp/...\"\n mkdir -p \"$DIR\"",
          "patchSetTimestamp": 1534789358000
        },
        {
          "file": "shell/autocorrectinfofile",
          "line": 18,
          "reviewer": ids["zxiiro"],
          "message": "Done",
          "patchSetTimestamp": 1534789358000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 32,
          "reviewer": ids["zxiiro"],
          "message": "Now that I understand this a bit more I think maybe calling this function \"get_committers\" is more accurate?",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 52,
          "reviewer": ids["zxiiro"],
          "message": "So the output we are providing it needs to be a properly formatted YAML?\n\nIn the case where only ID is printed it\u0027s not outputting a list item \"- id: uid\" instead it\u0027s just \"id: uid\" is this intended?",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 54,
          "reviewer": ids["zxiiro"],
          "message": "Ok I think my original comment got misunderstood. Hopefully I\u0027ll be more clear this time. I didn\u0027t mean to add yet another if-statement to check that FULL and ID are passed.\n\nIf I understand the intent of this function correctly then it has 2 modes.\n\n1. --id is passed so return a single account\n2. --id is not passed so return all committers\n\nWithin 2) there is 2 states:\n\na. --full is passed so print name, email, and id\nb. --full is not passed so return only id\n\n\nI think this code would be a lot more cleaner. There\u0027s 2 parts to this:\n\nnew function declared above list_committers:\n\n    def print_committer_info(committer, full):\n        if full:\n            print(\"    - name: {}\".format(committer[\u0027name\u0027]))\n            print(\"      email: {}\".format(committer[\u0027email\u0027]))\n\n        print(\"      id: {}\".format(committer[\u0027id\u0027]))\n\nThis function handles printing both full and none full outputs.\n\nThe 2nd part the new loop:\n\n        for item in lookup:\n            if id:\n                if item[\u0027id\u0027] \u003d\u003d id:\n                    print_committer_info(item, True)\n                    break\n                else:\n                    continue\n\n            print_committer_info(item, full)\n\nThis loop is more clean and covers both cases of if we want to search for a single ID, vs print all of the IDs.",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 66,
          "reviewer": ids["zxiiro"],
          "message": "This only deals with committers as far as I can tell. Maybe calling the function \"sync_committers\" would make more sense?",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 67,
          "reviewer": ids["zxiiro"],
          "message": "Sync\u0027s committer information from LDAP into INFO.yaml",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "lftools/cli/infofile.py",
          "line": 79,
          "reviewer": ids["zxiiro"],
          "message": "Using \"with open\" syntax would be much better here.\n\n with open(info_file) as f:\n     info_data \u003d ryaml.load(f)\n with open(ldap_file) as f:\n     ldap_data \u003d ryaml.load(f)\n\nThis ensures that f.close() is appropriately called.",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 11,
          "reviewer": ids["zxiiro"],
          "message": "I think this pydoc is not accurate. It works on more than just OPNFV right?",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 14,
          "reviewer": ids["zxiiro"],
          "message": "Would be easier to read like this:\n\nPrereqs:\n\n - yum install python-devel openldap-devel\n - pip install python-ldap",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "lftools/cli/ldap_cli.py",
          "line": 37,
          "reviewer": ids["zxiiro"],
          "message": "committers",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "releasenotes/notes/ldap-info-017df79c3c8f9585.yaml",
          "line": 8,
          "reviewer": ids["askb"],
          "message": "This is not an .rst file. Do we need the `.. code block::` here?",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "releasenotes/notes/ldap-info-017df79c3c8f9585.yaml",
          "line": 8,
          "reviewer": ids["zxiiro"],
          "message": "This is an RST file for our purposes. Reno generates RSTs from YAML via the Sphinx plugin.",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "releasenotes/notes/ldap-info-017df79c3c8f9585.yaml",
          "line": 19,
          "reviewer": ids["askb"],
          "message": "this is not an .rst file. Do we need the `.. code block::` here?",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "releasenotes/notes/ldap-info-017df79c3c8f9585.yaml",
          "line": 19,
          "reviewer": ids["zxiiro"],
          "message": "This is an RST file for our purposes. Reno generates RSTs from YAML via the Sphinx plugin.",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "shell/inactivecommitters",
          "line": 23,
          "reviewer": ids["askb"],
          "message": "optionally fix, shorter version: `date +%F`",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "shell/inactivecommitters",
          "line": 23,
          "reviewer": ids["zxiiro"],
          "message": "Personally I like %Y-%m-%d because it\u0027s clear what it means at a glance. %F I\u0027d have to Google and find out.",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "shell/inactivecommitters",
          "line": 37,
          "reviewer": ids["askb"],
          "message": "optionally fix, shorter version: `date +%F`",
          "patchSetTimestamp": 1534812025000
        },
        {
          "file": "shell/inactivecommitters",
          "line": 37,
          "reviewer": ids["zxiiro"],
          "message": "Personally I like %Y-%m-%d because it\u0027s clear what it means at a glance. %F I\u0027d have to Google and find out.",
          "patchSetTimestamp": 1534812025000
        }
      ]
    }
  ],
  "reviewersForOwnCommits": [
    {
      "identity": ids["askb"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 4,
        "approvals": {}
      }
    },
    {
      "identity": ids["abaranov"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    },
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 6,
        "commentCount": 68,
        "approvals": {
          "-1": 5,
          "2": 1
        }
      }
    },
    {
      "identity": ids["lf-jenkins"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    },
    {
      "identity": ids["bramwelt"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 1,
        "approvals": {}
      }
    },
    {
      "identity": ids["agrimberg"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 1,
        "commentCount": 0,
        "approvals": {
          "1": 1
        }
      }
    }
  ],
  "repositories": {
    "releng/lftools": {
      "name": "releng/lftools",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/lftools",
      "reviewRequestors": [],
      "commitCountForUser": 1
    }
  },
  "averageTimeInCodeReview": 5080197000,
  "abandonedCommitCount": 0,
  "projects": [
    {
      "name": "releng/lftools",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/lftools",
      "reviewRequestors": [],
      "commitCountForUser": 1
    }
  ],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 0
};
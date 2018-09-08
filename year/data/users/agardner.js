userdata['agardner'] = {
  "identity": ids["agardner"],
  "reviewCountPlus2": 4,
  "reviewCountPlus1": 3,
  "reviewCountMinus1": 1,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1507920445000,
  "lastActiveDate": 1535126175000,
  "activeDayCount": 15,
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
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I8458798d102ba8eac401b1350a029247fa1910cc",
      "commitNumber": 6857,
      "subject": "ldap-lookup and Check_committers scripts",
      "owner": ids["agardner"],
      "url": "https://gerrit.linuxfoundation.org/infra/6857",
      "commitMessage": "ldap-lookup and Check_committers scripts\n\n---\nldap-lookup:\nProvides a way to ouput: ldap-group \"lfid\",\"Full Name\",\"email@address\"\n\n---\nCheck_committers.sh:\n\nreads output of ldap-lookup.\nSearches gerrit by email address to see user participation\noutputs users that have not participated within the\nlast six months, or at all.\n\nOutput example:\nopnfv-gerrit-ipv6-submitters \"foo baz\" has \\\nnever used gerrit foo@bar.com\nopnfv-gerrit-doctor-submitters \"bar biz\" has not\nused gerrit in 6 months bar@bar.com\n\nAlso usefull for finding multiple user accounts, which may be\nabandonded.\n\n---\nBuild_INFO_committers.sh:\n\ncalls ../3rdparty/ldap-lookup.py \"$1\"\n  where $1 is the ldap-group name you would like to build yaml for your\nINFO.yaml file\n\nOutput example:\n    - name: \u0027Aric Gardner\u0027\n      email: \u0027agardner@linuxfoundation.org\u0027\n      company: \u0027linuxfoundation\u0027\n      uid: \u0027 agardner\u0027\n      timezone: \u0027\u0027\n    - name: \u0027Trevor Bramwell\u0027\n      email: \u0027tbramwell@linuxfoundation.org\u0027\n      company: \u0027linuxfoundation\u0027\n      uid: \u0027 bramwelt\u0027\n      timezone: \u0027\u0027\n\nIssue: RELENG-407\nChange-Id: I8458798d102ba8eac401b1350a029247fa1910cc\nSigned-off-by: agardner \u003cagardner@linuxfoundation.org\u003e\n",
      "createdOnDate": 1507920445000,
      "lastUpdatedDate": 1531334124000,
      "isOpen": false,
      "status": "ABANDONED",
      "reviewers": [
        ids["zxiiro"],
        ids["agardner"],
        ids["lf-jenkins"],
        ids["agrimberg"],
        ids["askb"]
      ],
      "comments": [
        {
          "timestamp": 1507920445000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1507920590000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/288/"
        },
        {
          "timestamp": 1507920767000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/288/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/288/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/288"
        },
        {
          "timestamp": 1508181574000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 1:\n\nreverify"
        },
        {
          "timestamp": 1508182016000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 1:\n\nretrigger"
        },
        {
          "timestamp": 1508183584000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 1:\n\nrecheck"
        },
        {
          "timestamp": 1508183627000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/4/"
        },
        {
          "timestamp": 1508183954000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/4/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/4/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-any/4"
        },
        {
          "timestamp": 1508188238000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1508188290000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/5/"
        },
        {
          "timestamp": 1508188606000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/5/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/5/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-any/5"
        },
        {
          "timestamp": 1518199637000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1518199729000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/46/"
        },
        {
          "timestamp": 1518200316000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/46/ : FAILURE\n\nFile shell/Check_committers is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/46/ )\n\nThe commit message body (all lines but the first line) contains lines that are too long. The should be 72 characters or less with the possible exception of unbreakable things like URLs. Please update the commit message as necessary to pass this check. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/46/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/46"
        },
        {
          "timestamp": 1521146036000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1521146278000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/61/"
        },
        {
          "timestamp": 1521146397000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review-1\n\nWe should try to link those scripts into lftools rather than just dumping the code. Also should use the proper extensions so that the linter picks them up."
        },
        {
          "timestamp": 1521146653000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/61/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/61/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/61"
        },
        {
          "timestamp": 1521147468000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1521147847000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/62/"
        },
        {
          "timestamp": 1521148115000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/62/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/62/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/62"
        },
        {
          "timestamp": 1522776976000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 6."
        },
        {
          "timestamp": 1522777517000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/64/"
        },
        {
          "timestamp": 1522777846000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/64/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/64/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/64"
        },
        {
          "timestamp": 1522779582000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 7."
        },
        {
          "timestamp": 1522779885000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/65/"
        },
        {
          "timestamp": 1522780104000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 8."
        },
        {
          "timestamp": 1522780131000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/65/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/65/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/65"
        },
        {
          "timestamp": 1522780131000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/66/"
        },
        {
          "timestamp": 1522780390000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/66/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/66/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/66"
        },
        {
          "timestamp": 1527778744000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 9: Commit message was updated."
        },
        {
          "timestamp": 1527778775000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/93/"
        },
        {
          "timestamp": 1527779008000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/93/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/93/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/93"
        },
        {
          "timestamp": 1527779533000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 10: Patch Set 9 was rebased."
        },
        {
          "timestamp": 1527779775000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/94/"
        },
        {
          "timestamp": 1527779974000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/94/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/94/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/94"
        },
        {
          "timestamp": 1527780596000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 11."
        },
        {
          "timestamp": 1527780723000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 11:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/95/"
        },
        {
          "timestamp": 1527780938000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 11: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/95/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/95"
        },
        {
          "timestamp": 1527783128000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 11: Code-Review-1\n\n(3 comments)"
        },
        {
          "timestamp": 1527820552000,
          "reviewer": ids["askb"],
          "message": "Patch Set 11:\n\n(1 comment)"
        },
        {
          "timestamp": 1529685412000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 12: Patch Set 11 was rebased"
        },
        {
          "timestamp": 1529685545000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 13: Commit message was updated."
        },
        {
          "timestamp": 1529685695000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 13:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/107/"
        },
        {
          "timestamp": 1529685865000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 13: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/107/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/107"
        },
        {
          "timestamp": 1529687771000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 13: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1529693787000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 14."
        },
        {
          "timestamp": 1529693893000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 15."
        },
        {
          "timestamp": 1529694013000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 16."
        },
        {
          "timestamp": 1529694040000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 17: Commit message was updated."
        },
        {
          "timestamp": 1529694065000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 17:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/108/"
        },
        {
          "timestamp": 1529694267000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 17: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/108/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/108"
        },
        {
          "timestamp": 1529697577000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 18."
        },
        {
          "timestamp": 1529697697000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 18: Code-Review-1\n\n3rdparty/ldap-lookup.py is putting an extra space before my uid. not sure why."
        },
        {
          "timestamp": 1529697808000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 18: -Code-Review\n\n(1 comment)"
        },
        {
          "timestamp": 1529697837000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 18:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/109/"
        },
        {
          "timestamp": 1529697886000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 19: Commit message was updated."
        },
        {
          "timestamp": 1529697906000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 18: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/109/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/109/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/109"
        },
        {
          "timestamp": 1529698095000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 19:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/110/"
        },
        {
          "timestamp": 1529698295000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 19: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/110/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/110/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/110"
        },
        {
          "timestamp": 1529699729000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 20."
        },
        {
          "timestamp": 1529699925000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 20:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/111/"
        },
        {
          "timestamp": 1529700004000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 21."
        },
        {
          "timestamp": 1529700022000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 20: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/111/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/111/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/111"
        },
        {
          "timestamp": 1529700196000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 21:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/112/"
        },
        {
          "timestamp": 1529700375000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 21: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/112/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/112/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/112"
        },
        {
          "timestamp": 1529935440000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 21: Code-Review-1\n\nI still think this script should hook into lftools rather than being just random scripts lying around in the lftools directory."
        },
        {
          "timestamp": 1530024125000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 22."
        },
        {
          "timestamp": 1530024296000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 22:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/115/"
        },
        {
          "timestamp": 1530024497000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 22: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/115/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/115"
        },
        {
          "timestamp": 1530812116000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 22: Code-Review-2\n\nReplaced by https://gerrit.linuxfoundation.org/infra/#/c/11558/"
        },
        {
          "timestamp": 1531334124000,
          "reviewer": ids["agardner"],
          "message": "Abandoned"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "2523df052ddf90109f5922043ea9c315cc8a7fe5",
          "parents": [
            "9a42505848cecfbd31ba7e08a9a9a0bc32859d78"
          ],
          "ref": "refs/changes/57/6857/1",
          "uploader": ids["agardner"],
          "createdOnDate": 1507920445000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1508183954000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 182,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "788d40b56587837a839220b59e9befd457b867a3",
          "parents": [
            "9a42505848cecfbd31ba7e08a9a9a0bc32859d78"
          ],
          "ref": "refs/changes/57/6857/2",
          "uploader": ids["agardner"],
          "createdOnDate": 1508188238000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1508188606000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 200,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "bc81b38cea03be3b9e1583ecd059c39233ebf3dc",
          "parents": [
            "9a42505848cecfbd31ba7e08a9a9a0bc32859d78"
          ],
          "ref": "refs/changes/57/6857/3",
          "uploader": ids["agardner"],
          "createdOnDate": 1518199637000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1518200316000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 193,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "c6986da0f39267ebd05c3360e3e44494f4118d37",
          "parents": [
            "9a42505848cecfbd31ba7e08a9a9a0bc32859d78"
          ],
          "ref": "refs/changes/57/6857/4",
          "uploader": ids["agardner"],
          "createdOnDate": 1521146036000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1521146397000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1521146653000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 206,
          "sizeDeletions": 0
        },
        {
          "number": 5,
          "revision": "e5fe2bcf7c10d366926c7cd82a8e5db05ed7edf9",
          "parents": [
            "9a42505848cecfbd31ba7e08a9a9a0bc32859d78"
          ],
          "ref": "refs/changes/57/6857/5",
          "uploader": ids["agardner"],
          "createdOnDate": 1521147468000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1521148115000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 206,
          "sizeDeletions": 0
        },
        {
          "number": 6,
          "revision": "3d37415d48f5273c1a3819604662b1e04a0a185a",
          "parents": [
            "9a42505848cecfbd31ba7e08a9a9a0bc32859d78"
          ],
          "ref": "refs/changes/57/6857/6",
          "uploader": ids["agardner"],
          "createdOnDate": 1522776976000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1522777846000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 206,
          "sizeDeletions": 0
        },
        {
          "number": 7,
          "revision": "185d7eafcd414b895e6546db93609834dfa51fe0",
          "parents": [
            "cda9bc3801eb5838204a20f911eff648d16c70c5"
          ],
          "ref": "refs/changes/57/6857/7",
          "uploader": ids["agardner"],
          "createdOnDate": 1522779582000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1522780131000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 208,
          "sizeDeletions": 0
        },
        {
          "number": 8,
          "revision": "4281cbe748c2c423c75f50e152f0b75c8858b81c",
          "parents": [
            "cda9bc3801eb5838204a20f911eff648d16c70c5"
          ],
          "ref": "refs/changes/57/6857/8",
          "uploader": ids["agardner"],
          "createdOnDate": 1522780104000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1522780390000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 207,
          "sizeDeletions": 0
        },
        {
          "number": 9,
          "revision": "62b69adc0c2ca8b9fa1014fe3cd62bdb3af9555b",
          "parents": [
            "cda9bc3801eb5838204a20f911eff648d16c70c5"
          ],
          "ref": "refs/changes/57/6857/9",
          "uploader": ids["agardner"],
          "createdOnDate": 1527778744000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1527779008000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 207,
          "sizeDeletions": 0
        },
        {
          "number": 10,
          "revision": "2589a11b9795bcb832f08705bf3c077f38ee1b31",
          "parents": [
            "f881931f8a8b2fb45179312ba05cf97b788770ff"
          ],
          "ref": "refs/changes/57/6857/10",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1527779533000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1527779974000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 207,
          "sizeDeletions": 0
        },
        {
          "number": 11,
          "revision": "2f8fd3ee4e8fbcc6ac35a08464f4fbc6cec87e27",
          "parents": [
            "f881931f8a8b2fb45179312ba05cf97b788770ff"
          ],
          "ref": "refs/changes/57/6857/11",
          "uploader": ids["agardner"],
          "createdOnDate": 1527780596000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1527783128000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1527780938000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 9,
              "reviewer": ids["agrimberg"],
              "message": "Move this to the footer in the following format:\n\nIssue: RELENG-407",
              "patchSetTimestamp": 1527780596000
            },
            {
              "file": "3rdparty/ldap-lookup.py",
              "line": 25,
              "reviewer": ids["agrimberg"],
              "message": "While I understand that our standard use case is going to be LF infra, can we please not hard code the infra into the script? I would prefer a configuration file and / or CLI switches for setting this information",
              "patchSetTimestamp": 1527780596000
            },
            {
              "file": "shell/Check_committers.sh",
              "line": 53,
              "reviewer": ids["agrimberg"],
              "message": "I don\u0027t like tools telling us to loosen system security. Can you please find a way to do this / inform how to update properly so that we can use the certs being provided by the infrastructure?",
              "patchSetTimestamp": 1527780596000
            },
            {
              "file": "shell/Check_committers.sh",
              "line": 53,
              "reviewer": ids["askb"],
              "message": "should be using `~/.ldaprc` for users\n\nHOST ldap.fqdn \nPORT 636  \nTLS_REQCERT ALLOW\n\nNote: this setting requires pulling in CA certs from letsencrypt for this to work. \n\ndoes this work with vpn?",
              "patchSetTimestamp": 1527780596000
            }
          ],
          "sizeInsertions": 206,
          "sizeDeletions": 0
        },
        {
          "number": 12,
          "revision": "7908152816f92f82e423199dc38111c28c94fd74",
          "parents": [
            "aec13d06c76e1386dd12e0dc10ef9ae0f117c664"
          ],
          "ref": "refs/changes/57/6857/12",
          "uploader": ids["agardner"],
          "createdOnDate": 1529685412000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 206,
          "sizeDeletions": 0
        },
        {
          "number": 13,
          "revision": "e54899f5244897a2283c15c7503165e772ae99da",
          "parents": [
            "aec13d06c76e1386dd12e0dc10ef9ae0f117c664"
          ],
          "ref": "refs/changes/57/6857/13",
          "uploader": ids["agardner"],
          "createdOnDate": 1529685545000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1529687771000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1529685865000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 29,
              "reviewer": ids["agrimberg"],
              "message": "Extraneous line. This line makes it part of the body and not the footer. Remove this please.",
              "patchSetTimestamp": 1529685545000
            }
          ],
          "sizeInsertions": 206,
          "sizeDeletions": 0
        },
        {
          "number": 14,
          "revision": "247b09f381ea6a86a0ccae4071fb8643e4d6a274",
          "parents": [
            "aec13d06c76e1386dd12e0dc10ef9ae0f117c664"
          ],
          "ref": "refs/changes/57/6857/14",
          "uploader": ids["agardner"],
          "createdOnDate": 1529693787000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 209,
          "sizeDeletions": 0
        },
        {
          "number": 15,
          "revision": "30693351d37de097fc867f23986c809af0a5b01d",
          "parents": [
            "aec13d06c76e1386dd12e0dc10ef9ae0f117c664"
          ],
          "ref": "refs/changes/57/6857/15",
          "uploader": ids["agardner"],
          "createdOnDate": 1529693893000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 209,
          "sizeDeletions": 0
        },
        {
          "number": 16,
          "revision": "574649bfa9f27febe112a3f89fce3b5f3fd0dcf1",
          "parents": [
            "aec13d06c76e1386dd12e0dc10ef9ae0f117c664"
          ],
          "ref": "refs/changes/57/6857/16",
          "uploader": ids["agardner"],
          "createdOnDate": 1529694013000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 209,
          "sizeDeletions": 0
        },
        {
          "number": 17,
          "revision": "9b18f4a2d445e1680052f3c3e7391c557c842ed0",
          "parents": [
            "aec13d06c76e1386dd12e0dc10ef9ae0f117c664"
          ],
          "ref": "refs/changes/57/6857/17",
          "uploader": ids["agardner"],
          "createdOnDate": 1529694040000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1529694267000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 209,
          "sizeDeletions": 0
        },
        {
          "number": 18,
          "revision": "4351957a186e2aa651ea6d6d49c9417d35325a4a",
          "parents": [
            "aec13d06c76e1386dd12e0dc10ef9ae0f117c664"
          ],
          "ref": "refs/changes/57/6857/18",
          "uploader": ids["agardner"],
          "createdOnDate": 1529697577000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1529697906000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "3rdparty/ldap-lookup.py",
              "line": 96,
              "reviewer": ids["agardner"],
              "message": "a space is output here before the uid. not sure where its coming form.  \neg: opnfv-gerrit-releng-submitters, agardner,Aric Gardner,agardner@linuxfoundation.org",
              "patchSetTimestamp": 1529697577000
            }
          ],
          "sizeInsertions": 268,
          "sizeDeletions": 0
        },
        {
          "number": 19,
          "revision": "ced9423ac47eb4b158f4dbb84dcf26e15c40045a",
          "parents": [
            "aec13d06c76e1386dd12e0dc10ef9ae0f117c664"
          ],
          "ref": "refs/changes/57/6857/19",
          "uploader": ids["agardner"],
          "createdOnDate": 1529697886000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1529698295000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 268,
          "sizeDeletions": 0
        },
        {
          "number": 20,
          "revision": "d781f2dace85cbc585b96facce8c55024d285a3b",
          "parents": [
            "aec13d06c76e1386dd12e0dc10ef9ae0f117c664"
          ],
          "ref": "refs/changes/57/6857/20",
          "uploader": ids["agardner"],
          "createdOnDate": 1529699729000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1529700022000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 269,
          "sizeDeletions": 0
        },
        {
          "number": 21,
          "revision": "f83f8e05d2bb3e84a4874f433bbf231a8060a3a4",
          "parents": [
            "aec13d06c76e1386dd12e0dc10ef9ae0f117c664"
          ],
          "ref": "refs/changes/57/6857/21",
          "uploader": ids["agardner"],
          "createdOnDate": 1529700004000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1529935440000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1529700375000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 267,
          "sizeDeletions": 0
        },
        {
          "number": 22,
          "revision": "d9961e2b229d7b9e83e7eccc6bdfcf1d505642dd",
          "parents": [
            "aec13d06c76e1386dd12e0dc10ef9ae0f117c664"
          ],
          "ref": "refs/changes/57/6857/22",
          "uploader": ids["agardner"],
          "createdOnDate": 1530024125000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -2,
              "grantedOnDate": 1530812116000,
              "grantedBy": ids["agardner"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1530024497000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 267,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I7299d0a636fd468f4aef60236e49bcbcc0ea58e6",
      "commitNumber": 9442,
      "subject": "Script that Creates a gerrit project.",
      "owner": ids["agardner"],
      "url": "https://gerrit.linuxfoundation.org/infra/9442",
      "commitMessage": "Script that Creates a gerrit project.\n\nCreates a gerrit project and sets up permissions\nEnd goal is that this runs on lf\u0027s upcomming\njenkins server upon approval of a new project.\n\nNext iteration should read a yaml file (INFO.yaml)\nrather than using maual getops like is done now.\n\nSince configs differ between projects, I have setup\nconfigs for OPNFV, ODL and ONAP as examples.\n\nTesting can be done on Trevors ci-workshop,\njust start up the workshop login to jenkins.localhost\nas sandbox and add your ssh key\n\nmust use -s for workshop as it will set the git config for you.\n\n-w workspace must be outside of a git repo (default is /tmp)\n\nusage: ./Gerrit-Create-Project.sh [OPTIONS]\n -h  Show this message\n -p  project url eg: gerrit.localhost\n -n  project short name: eg: opnfv odl onap\n -r  repository name\n -u  ssh user name\n -w  workspace to do clones etc. (must not be in a git repo)\n     Default is /tmp/\n -i  INFO.yaml file\n -l  LICENSE file\n -s  Sandbox mode eg:\n     git config gitreview.username \"sandbox\"\n     git config user.email \"sandbox@example.org\"\n\nexample: ./Gerrit-Create-Project.sh  -p gerrit.localhost -n opnfv -r\nreponame -u sandbox -i INFO.yaml -l LICENSE\n\nDocs forthcomming.\nI will probably do a micro demo of this at an upcomming call\n\nChange-Id: I7299d0a636fd468f4aef60236e49bcbcc0ea58e6\nSigned-off-by: agardner \u003cagardner@linuxfoundation.org\u003e\n",
      "createdOnDate": 1521050752000,
      "lastUpdatedDate": 1522782579000,
      "isOpen": true,
      "status": "NEW",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["bramwelt"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1521050752000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1521050791000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 2: Commit message was updated."
        },
        {
          "timestamp": 1521050945000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1521050994000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1521051031000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/59/"
        },
        {
          "timestamp": 1521051534000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/59/ : FAILURE\n\nFile shell/Gerrit-Create-Project/Gerrit-Create-Project.sh is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/59/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/59"
        },
        {
          "timestamp": 1521054793000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4:\n\nCan we hook this into lftools so that someone can type something like:\n\n lftools project create abc\n\nand then it creates everything?"
        },
        {
          "timestamp": 1521127636000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1521127832000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/60/"
        },
        {
          "timestamp": 1521128097000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/60/ : FAILURE\n\nFile shell/Gerrit-Create-Project/Gerrit-Create-Project.sh is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/60/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/60"
        },
        {
          "timestamp": 1522782011000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 6."
        },
        {
          "timestamp": 1522782329000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/67/"
        },
        {
          "timestamp": 1522782579000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/67/ : FAILURE\n\nFile shell/Gerrit-Create-Project/Gerrit-Create-Project.sh is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/67/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/67"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "24234d1fa60104dcf322b3bc0570c357415c6e98",
          "parents": [
            "cda9bc3801eb5838204a20f911eff648d16c70c5"
          ],
          "ref": "refs/changes/42/9442/1",
          "uploader": ids["agardner"],
          "createdOnDate": 1521050752000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 463,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "a55849c653ac3b566abd660af4a2815f86430e30",
          "parents": [
            "cda9bc3801eb5838204a20f911eff648d16c70c5"
          ],
          "ref": "refs/changes/42/9442/2",
          "uploader": ids["agardner"],
          "createdOnDate": 1521050791000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 463,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "e9a27d4d418028475f73acac4c3df31cf31a34ae",
          "parents": [
            "cda9bc3801eb5838204a20f911eff648d16c70c5"
          ],
          "ref": "refs/changes/42/9442/3",
          "uploader": ids["agardner"],
          "createdOnDate": 1521050945000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 463,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "35222a539977d6bd8f5b6f453a22e3c9d491a3e1",
          "parents": [
            "cda9bc3801eb5838204a20f911eff648d16c70c5"
          ],
          "ref": "refs/changes/42/9442/4",
          "uploader": ids["agardner"],
          "createdOnDate": 1521050994000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1521051534000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 456,
          "sizeDeletions": 0
        },
        {
          "number": 5,
          "revision": "b62dedbd1aca588edb1beb7b66ceb82c5684297b",
          "parents": [
            "cda9bc3801eb5838204a20f911eff648d16c70c5"
          ],
          "ref": "refs/changes/42/9442/5",
          "uploader": ids["agardner"],
          "createdOnDate": 1521127636000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1521128097000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 455,
          "sizeDeletions": 0
        },
        {
          "number": 6,
          "revision": "edaaa3449238d13bbdaaf2087ae9bcf396c52987",
          "parents": [
            "cda9bc3801eb5838204a20f911eff648d16c70c5"
          ],
          "ref": "refs/changes/42/9442/6",
          "uploader": ids["agardner"],
          "createdOnDate": 1522782011000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1522782579000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 455,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Ie794636e49f97ff2ac2735e81c407b57a3470f55",
      "commitNumber": 10705,
      "subject": "Support recheck and reverify in global-jjb",
      "owner": ids["agardner"],
      "url": "https://gerrit.linuxfoundation.org/infra/10705",
      "commitMessage": "Support recheck and reverify in global-jjb\n\nIn OPNFV we are using reverify as a convention (we also support recheck)\nThis was previously deprecated in global-jjb\nBut I\u0027m adding it back to not confuse our users\n\nChange-Id: Ie794636e49f97ff2ac2735e81c407b57a3470f55\nSigned-off-by: Aric Gardner \u003cagardner@linuxfoundation.org\u003e\n",
      "createdOnDate": 1526587776000,
      "lastUpdatedDate": 1531495847000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["agardner"],
        ids["bramwelt"],
        ids["askb"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1526587776000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1526587957000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/443/"
        },
        {
          "timestamp": 1526588159000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/443/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/443"
        },
        {
          "timestamp": 1526596014000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1526597090000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1: Code-Review-2\n\nIs there any specific reason we cant use same notation across projects?"
        },
        {
          "timestamp": 1526597326000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1:\n\nchange LGTM! Added a -2 so that my comment gets some attention before it gets merged."
        },
        {
          "timestamp": 1526659121000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 1:\n\n@Anil we have used reverify as a convention since our inception, I don\u0027t want to confuse users due to the switch to global jjb. I discussed with Andy in slack before creating this change."
        },
        {
          "timestamp": 1526838506000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n(2 comments)\n\nIf we merge this, we should update all of ODL\u0027s jobs to support both recheck and reverify too before upgrading to whichever version of global-jjb this lands in otherwise if someone types \"reverify\" in ODL they will only run global-jjb jobs and again cause confusion on the ODL side.\n\n(This was the reason we originally dropped reverify in ODL)\n\nHowever if we can ensure all the regexes are the same everywhere I don\u0027t see this as a problem.\n\nOne suggestion to use \u0027(recheck|reverify)$\u0027 as the search pattern, both reducing the number of lines added as well as makes it easier for folks who are copy pasting to get the full regex."
        },
        {
          "timestamp": 1526860683000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1529684819000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1529684973000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1529685078000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/602/"
        },
        {
          "timestamp": 1529685287000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/602/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/602"
        },
        {
          "timestamp": 1529761731000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1529848497000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review-1\n\n(2 comments)"
        },
        {
          "timestamp": 1530302729000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1530302825000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/620/"
        },
        {
          "timestamp": 1530302973000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/620/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/620"
        },
        {
          "timestamp": 1530359807000,
          "reviewer": ids["askb"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1530398819000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1530398852000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4:\n\nUpdated to fix all instances of \n\n recheck$|^reverify to (recheck|reverify)"
        },
        {
          "timestamp": 1530398895000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/621/"
        },
        {
          "timestamp": 1530399062000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/621/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/621"
        },
        {
          "timestamp": 1531238824000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 4: Code-Review+1"
        },
        {
          "timestamp": 1531245097000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review-1\n\n(2 comments)"
        },
        {
          "timestamp": 1531245173000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1531245387000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/628/"
        },
        {
          "timestamp": 1531245526000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/628/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/628"
        },
        {
          "timestamp": 1531245554000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 5: Code-Review+2"
        },
        {
          "timestamp": 1531325687000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 6: Patch Set 5 was rebased."
        },
        {
          "timestamp": 1531325768000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/631/"
        },
        {
          "timestamp": 1531325915000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/631/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/631"
        },
        {
          "timestamp": 1531334147000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 6: Code-Review+1"
        },
        {
          "timestamp": 1531495845000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 6: Code-Review+2"
        },
        {
          "timestamp": 1531495847000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "224139b46a9e9c7143cbc610f42371dd217b389c",
          "parents": [
            "aec2a0c78d8ca2d4ea9570cc249bbe55b33643f3"
          ],
          "ref": "refs/changes/05/10705/1",
          "uploader": ids["agardner"],
          "createdOnDate": 1526587776000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1526596014000,
              "grantedBy": ids["bramwelt"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1526860683000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1526588159000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 10,
              "reviewer": ids["zxiiro"],
              "message": "typo: global-jjb",
              "patchSetTimestamp": 1526587776000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 615,
              "reviewer": ids["zxiiro"],
              "message": "I believe this is regex so maybe we can do\n\n(recheck|reverify)$\n\nthat way if folks copy paste the regex they\u0027ll get both in the same call.",
              "patchSetTimestamp": 1526587776000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 615,
              "reviewer": ids["askb"],
              "message": "The verify jobs would be triggered resulting from the following comments:\n\n1. reverify\n2. recheck\n3. a comment line ending with reverify\n4. a comment line ending with recheck \n\nActual gerrit comment would look like:\n\n1. Patch Set 14: recheck\n2. Patch Set 15: reverify\n3. Patch Set 25: a comment line ending with reverify\n4. Patch Set 45: a comment line ending with recheck\n\nI tested the regex which handled all the about cases while it matches only for tests 1. and 2. So that only correct commands would retrigger the jobs.  \n\n^Patch Set[ ]+[0-9]+:([ ]+|[\\n]+)(recheck|reverify)$",
              "patchSetTimestamp": 1526587776000
            }
          ],
          "sizeInsertions": 18,
          "sizeDeletions": -6
        },
        {
          "number": 2,
          "revision": "cc4427298fe0ffca2cd5426432c36c8062f7cb6f",
          "parents": [
            "d0dddc7e5ea93df8e47b90bdf6afd2edfd966cb5"
          ],
          "ref": "refs/changes/05/10705/2",
          "uploader": ids["agardner"],
          "createdOnDate": 1529684819000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1529848497000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1529685287000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 483,
              "reviewer": ids["zxiiro"],
              "message": "I think this pattern might be easier to manage if we ever decide to add a 3rd option: ^(recheck|reverify)$",
              "patchSetTimestamp": 1529684819000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 922,
              "reviewer": ids["zxiiro"],
              "message": "missing trialing $",
              "patchSetTimestamp": 1529684819000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 1039,
              "reviewer": ids["agardner"],
              "message": "Hmm. what do I do for this one?",
              "patchSetTimestamp": 1529684819000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 1039,
              "reviewer": ids["zxiiro"],
              "message": "Probably:\n\n ^Patch Set[ ]+[0-9]+:([ ]+|[\\n]+)(recheck|reverify): [0-9 ]+",
              "patchSetTimestamp": 1529684819000
            }
          ],
          "sizeInsertions": 20,
          "sizeDeletions": -17
        },
        {
          "number": 3,
          "revision": "a879eb4b083807a8db60dbac45621c988bac6d6e",
          "parents": [
            "d0dddc7e5ea93df8e47b90bdf6afd2edfd966cb5"
          ],
          "ref": "refs/changes/05/10705/3",
          "uploader": ids["agardner"],
          "createdOnDate": 1530302729000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1530359807000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1530302973000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 20,
          "sizeDeletions": -17
        },
        {
          "number": 4,
          "revision": "d113e63c987519b0008aede3d1b7917e0ac9a227",
          "parents": [
            "5fbc7e5d91972c465b940e1ce0aa1e25d6b66e5e"
          ],
          "ref": "refs/changes/05/10705/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1530398819000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1531245097000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1531238824000,
              "grantedBy": ids["agardner"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1530399062000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/gerrit-fetch-dependencies.sh",
              "line": 27,
              "reviewer": ids["zxiiro"],
              "message": "On modern Linux we don\u0027t need to use egrep.\n\nhttps://unix.stackexchange.com/questions/17949/what-is-the-difference-between-grep-egrep-and-fgrep\n\nI think this should just be `grep -E` instead.",
              "patchSetTimestamp": 1530398819000
            },
            {
              "file": "shell/gerrit-fetch-dependencies.sh",
              "line": 28,
              "reviewer": ids["zxiiro"],
              "message": "I thin",
              "patchSetTimestamp": 1530398819000
            }
          ],
          "sizeInsertions": 20,
          "sizeDeletions": -17
        },
        {
          "number": 5,
          "revision": "280b57b4c2980930b6145d42d75feae7b353583b",
          "parents": [
            "dfb2c6ca52a4c885e42d6c2252706bd824c75068"
          ],
          "ref": "refs/changes/05/10705/5",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1531245173000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1531245554000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1531245526000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 20,
          "sizeDeletions": -17
        },
        {
          "number": 6,
          "revision": "a97f48ea67f1bd469d25ae816d7ba66786ecd68a",
          "parents": [
            "8f930852bc197279a3904c59dc315928d269c7bb"
          ],
          "ref": "refs/changes/05/10705/6",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1531325687000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1531495845000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1531495847000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1531334147000,
              "grantedBy": ids["agardner"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1531325915000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 20,
          "sizeDeletions": -17
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I1aa2f4a323fe9296bf9bfdc3a1d9043e32d24b8f",
      "commitNumber": 11532,
      "subject": "Make version string optional.",
      "owner": ids["agardner"],
      "url": "https://gerrit.linuxfoundation.org/infra/11532",
      "commitMessage": "Make version string optional.\n\nversions is not yet documented for INFO.yaml\nWe do not yet have version in OPNFV\u0027s INFO files.\n\nChange-Id: I1aa2f4a323fe9296bf9bfdc3a1d9043e32d24b8f\nSigned-off-by: Aric Gardner \u003cagardner@linuxfoundation.org\u003e\n",
      "createdOnDate": 1529699456000,
      "lastUpdatedDate": 1529709016000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["bramwelt"],
        ids["jwagantall"],
        ids["agrimberg"],
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["askb"]
      ],
      "comments": [
        {
          "timestamp": 1529699456000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1529699516000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1529699707000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/608/"
        },
        {
          "timestamp": 1529699772000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1529699884000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/608/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/608"
        },
        {
          "timestamp": 1529700189000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 2: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1529700552000,
          "reviewer": ids["agardner"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1529700628000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/609/"
        },
        {
          "timestamp": 1529700835000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/609/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/609"
        },
        {
          "timestamp": 1529700840000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1529709005000,
          "reviewer": ids["askb"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1529709016000,
          "reviewer": ids["askb"],
          "message": "Change has been successfully merged by Anil Belur"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "c57a833d9dd7b23f0e968d3c67745eccce6d58c8",
          "parents": [
            "d0dddc7e5ea93df8e47b90bdf6afd2edfd966cb5"
          ],
          "ref": "refs/changes/32/11532/1",
          "uploader": ids["agardner"],
          "createdOnDate": 1529699456000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 4,
          "sizeDeletions": -3
        },
        {
          "number": 2,
          "revision": "e4e13ba845e4e4f6a120da99b4002eaab75966d9",
          "parents": [
            "d0dddc7e5ea93df8e47b90bdf6afd2edfd966cb5"
          ],
          "ref": "refs/changes/32/11532/2",
          "uploader": ids["agardner"],
          "createdOnDate": 1529699516000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1529699772000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1529700189000,
              "grantedBy": ids["bramwelt"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1529699884000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "info-schema",
              "line": 34,
              "reviewer": ids["bramwelt"],
              "message": "These \u0027{\u0027 aren\u0027t needed, nor is \u0027required: false\u0027.\n\nJust removing \u0027version\u0027 from the required map above should be sufficient.",
              "patchSetTimestamp": 1529699516000
            }
          ],
          "sizeInsertions": 4,
          "sizeDeletions": -3
        },
        {
          "number": 3,
          "revision": "1df3ea4798123a8a0df734b8f78c62eae2bab9bf",
          "parents": [
            "d0dddc7e5ea93df8e47b90bdf6afd2edfd966cb5"
          ],
          "ref": "refs/changes/32/11532/3",
          "uploader": ids["agardner"],
          "createdOnDate": 1529700552000,
          "author": ids["agardner"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1529700840000,
              "grantedBy": ids["bramwelt"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1529709005000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1529709016000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1529700835000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 0,
          "sizeDeletions": -1
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
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I58b576cdcea370f4ae1386529b90130140d6840e",
      "commitNumber": 11624,
      "subject": "Add options to continue interrupted downloads",
      "owner": ids["askb"],
      "url": "https://gerrit.linuxfoundation.org/infra/11624",
      "commitMessage": "Add options to continue interrupted downloads\n\nAdd support to continue interrupted downloads with\n`lftools sign deploy-nexus`. This allows to continue partially\ndownloaded files and when used with user specified path (-d).\n\nRELENG-929\nChange-Id: I58b576cdcea370f4ae1386529b90130140d6840e\nSigned-off-by: Anil Belur \u003cabelur@linuxfoundation.org\u003e\n",
      "createdOnDate": 1530350156000,
      "lastUpdatedDate": 1531780365000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["askb"],
        ids["agrimberg"],
        ids["agardner"],
        ids["bramwelt"],
        ids["jwagantall"],
        ids["jeremyphelps"],
        ids["tijohnson"]
      ],
      "comments": [
        {
          "timestamp": 1530350156000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1530350334000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/136/"
        },
        {
          "timestamp": 1530350530000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/136/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/136"
        },
        {
          "timestamp": 1530366478000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1530366878000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n(2 comments)"
        },
        {
          "timestamp": 1530495833000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1530495931000,
          "reviewer": ids["askb"],
          "message": "Patch Set 2:\n\n(2 comments)"
        },
        {
          "timestamp": 1530495994000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/137/"
        },
        {
          "timestamp": 1530496208000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/137/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/137"
        },
        {
          "timestamp": 1530503242000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1530525735000,
          "reviewer": ids["askb"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1530525742000,
          "reviewer": ids["askb"],
          "message": "Abandoned"
        },
        {
          "timestamp": 1531153473000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1531398688000,
          "reviewer": ids["askb"],
          "message": "Patch Set 2:\n\n\u003e (1 comment)\n\nwget supports mirroring sites but does not do a file integrity check after downloading each file. However, this has to manually implemented. \n\nI realized that you can used the --continue option, which checks the file size and re-downloads the partially downloaded file. I have used this option to download large iso files, verified the md5sum."
        },
        {
          "timestamp": 1531437203000,
          "reviewer": ids["askb"],
          "message": "Restored"
        },
        {
          "timestamp": 1531437215000,
          "reviewer": ids["askb"],
          "message": "Patch Set 3: Patch Set 2 was rebased"
        },
        {
          "timestamp": 1531437235000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1531437437000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/164/"
        },
        {
          "timestamp": 1531437640000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/164/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/164"
        },
        {
          "timestamp": 1531779338000,
          "reviewer": ids["askb"],
          "message": "Patch Set 4:\n\nAnyone -1/+1 this please. I have tested this to work."
        },
        {
          "timestamp": 1531779996000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 4: Code-Review+2"
        },
        {
          "timestamp": 1531779997000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        },
        {
          "timestamp": 1531780365000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review+2"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "d2dba974b0414b4d509ce5bb967807044f7a71dd",
          "parents": [
            "d4148d445256165ff1c5927c123ed749fae44206"
          ],
          "ref": "refs/changes/24/11624/1",
          "uploader": ids["askb"],
          "createdOnDate": 1530350156000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1530366478000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1530350530000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 12,
              "reviewer": ids["zxiiro"],
              "message": "If it requires this patch than rebase ontop of it so that they cannot be merged independently of each other.",
              "patchSetTimestamp": 1530350156000
            },
            {
              "file": "shell/sign",
              "line": 151,
              "reviewer": ids["zxiiro"],
              "message": "I think shouldn\u0027t set infinity because symlinks can cause an infinite loop.",
              "patchSetTimestamp": 1530350156000
            },
            {
              "file": "shell/sign",
              "line": 151,
              "reviewer": ids["zxiiro"],
              "message": "I also think we shouldn\u0027t be sneaking in unrelated changes in a patch either and should be a separate discussion.",
              "patchSetTimestamp": 1530350156000
            },
            {
              "file": "shell/sign",
              "line": 151,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1530350156000
            },
            {
              "file": "shell/sign",
              "line": 151,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1530350156000
            }
          ],
          "sizeInsertions": 2,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "ebf9954b756624a9c7b84a2f204cac65aa32abaf",
          "parents": [
            "06cb412934f99cac0e17e7820a44a743265869e6"
          ],
          "ref": "refs/changes/24/11624/2",
          "uploader": ids["askb"],
          "createdOnDate": 1530495833000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1530503242000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1530496208000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/sign",
              "line": 152,
              "reviewer": ids["zxiiro"],
              "message": "What guarantees / protection do we have against corrupt file or files that were half downloaded the previous time say if lftools crashed in a previous run?\n\nOr what if a file with the same name already exists but is not byte equivalent?\n\nIf we upload a signature signed against a corrupt file it won\u0027t validate when pushed back up to Nexus.",
              "patchSetTimestamp": 1530495833000
            },
            {
              "file": "shell/sign",
              "line": 152,
              "reviewer": ids["askb"],
              "message": "None, with wget there are no guards to verify the checksum of every downloaded file. I tried using the -c (continue) option which does not work.\n\nAlso you are right, if the download file is interrupted and continued again from the same path, this just skips to the file. If we need to implement this manually downloading an individual file and verifying the checksum, with retries on failures. Let me know if you know of an option to overcome this.",
              "patchSetTimestamp": 1530495833000
            },
            {
              "file": "shell/sign",
              "line": 152,
              "reviewer": ids["zxiiro"],
              "message": "I think wget is sometimes used to mirror websites. How are those systems mirroring and ensuring file integrity of their mirrors?",
              "patchSetTimestamp": 1530495833000
            }
          ],
          "sizeInsertions": 1,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "3cebff5369c62f3379911dfa5e7a1d4fee20e021",
          "parents": [
            "7a9f2a811bd995755631753a574317b09442eaeb"
          ],
          "ref": "refs/changes/24/11624/3",
          "uploader": ids["askb"],
          "createdOnDate": 1531437215000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "7ecbff3261adcdc2d1cc80015d2628e63f6a5b2f",
          "parents": [
            "7a9f2a811bd995755631753a574317b09442eaeb"
          ],
          "ref": "refs/changes/24/11624/4",
          "uploader": ids["askb"],
          "createdOnDate": 1531437235000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1531779996000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1531779997000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1531780365000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1531437640000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I935e57b4536f58eb71b49d6558fefc170d50a8da",
      "commitNumber": 10182,
      "subject": "Fail Sphinx build even on warnings",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/10182",
      "commitMessage": "Fail Sphinx build even on warnings\n\nChange-Id: I935e57b4536f58eb71b49d6558fefc170d50a8da\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1524249952000,
      "lastUpdatedDate": 1524841668000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["agardner"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1524249952000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1524250006000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/80/"
        },
        {
          "timestamp": 1524250179000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/80/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/80"
        },
        {
          "timestamp": 1524689773000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 1: Code-Review+2\n\nWow, I wish opnfv\u0027s docs generated 0 warnings."
        },
        {
          "timestamp": 1524841668000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "f4eba826135078f838248f0ba272989d4e7c3c1f",
          "parents": [
            "ac4776720ca8f3526a7a24e31f62086349d180ea"
          ],
          "ref": "refs/changes/82/10182/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1524249952000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1524841668000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1524689773000,
              "grantedBy": ids["agardner"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1524250179000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2,
          "sizeDeletions": -2
        }
      ]
    },
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I453b322702f5699dda9bf40357a9b901e5712f36",
      "commitNumber": 7060,
      "subject": "Best practices for using JJB defaults",
      "owner": ids["askb"],
      "url": "https://gerrit.linuxfoundation.org/infra/7060",
      "commitMessage": "Best practices for using JJB defaults\n\nJira: RELENG-591\n\nChange-Id: I453b322702f5699dda9bf40357a9b901e5712f36\nSigned-off-by: Anil Belur \u003cabelur@linuxfoundation.org\u003e\n",
      "createdOnDate": 1508894648000,
      "lastUpdatedDate": 1508975736000,
      "isOpen": false,
      "status": "ABANDONED",
      "reviewers": [
        ids["zxiiro"],
        ids["agardner"],
        ids["askb"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1508894648000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1508894705000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/1/ (1/2)"
        },
        {
          "timestamp": 1508894733000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/10/ (2/2)"
        },
        {
          "timestamp": 1508895146000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/10/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/10/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-any/10\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/1/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-rtd-verify-any/1"
        },
        {
          "timestamp": 1508941453000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 1: Code-Review+1\n\n(5 comments)"
        },
        {
          "timestamp": 1508944765000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-2\n\nglobal-jjb documentation has been moved to the global-jjb project. This patch seems to re-add documentation to lftools that we moved to more appropriate projects."
        },
        {
          "timestamp": 1508971776000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1:\n\n\u003e global-jjb documentation has been moved to the global-jjb project.\n \u003e This patch seems to re-add documentation to lftools that we moved\n \u003e to more appropriate projects.\n\noh thanks, will submit this change to global-jjb then."
        },
        {
          "timestamp": 1508975338000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1:\n\n\u003e global-jjb documentation has been moved to the global-jjb project.\n \u003e This patch seems to re-add documentation to lftools that we moved\n \u003e to more appropriate projects.\n\nShould we consider removing the docs from here!"
        },
        {
          "timestamp": 1508975712000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1:\n\n\u003e \u003e global-jjb documentation has been moved to the global-jjb\n \u003e project.\n \u003e \u003e This patch seems to re-add documentation to lftools that we moved\n \u003e \u003e to more appropriate projects.\n \u003e \n \u003e Should we consider removing the docs from here!\n\nIts already removed!"
        },
        {
          "timestamp": 1508975736000,
          "reviewer": ids["askb"],
          "message": "Abandoned\n\nBest practices docs are no longer in the lftools repository."
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "571da4bd6aaa500abfb96d18d3a173218fc789c5",
          "parents": [
            "78cd27df781aa5eba37fc6d215c389a59979eadd"
          ],
          "ref": "refs/changes/60/7060/1",
          "uploader": ids["askb"],
          "createdOnDate": 1508894648000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -2,
              "grantedOnDate": 1508944765000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1508941453000,
              "grantedBy": ids["agardner"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1508895146000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "docs/best-practices.rst",
              "line": 231,
              "reviewer": ids["agardner"],
              "message": "Ah, I didn\u0027t know that.",
              "patchSetTimestamp": 1508894648000
            },
            {
              "file": "docs/best-practices.rst",
              "line": 276,
              "reviewer": ids["agardner"],
              "message": "reword, unclear, and mention -- pass an object (boolean, list or dict)",
              "patchSetTimestamp": 1508894648000
            },
            {
              "file": "docs/best-practices.rst",
              "line": 297,
              "reviewer": ids["agardner"],
              "message": "obj:disabled might be a better, simple, example eg: boolean",
              "patchSetTimestamp": 1508894648000
            },
            {
              "file": "docs/best-practices.rst",
              "line": 308,
              "reviewer": ids["agardner"],
              "message": "An example of when not to quote would make this section more useful",
              "patchSetTimestamp": 1508894648000
            },
            {
              "file": "docs/best-practices.rst",
              "line": 339,
              "reviewer": ids["agardner"],
              "message": "at both?",
              "patchSetTimestamp": 1508894648000
            }
          ],
          "sizeInsertions": 451,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Iffebd2b7e6b282d3e17a7bd6de1452e063f64603",
      "commitNumber": 11786,
      "subject": "Set Packer Image name as Build Description",
      "owner": ids["bramwelt"],
      "url": "https://gerrit.linuxfoundation.org/infra/11786",
      "commitMessage": "Set Packer Image name as Build Description\n\nWith the Build Description Setter plugin installed in Jenkins, the\npacker image name can be extracted after a successful build.\n\nThis allows users to no longer look through the build logs when trying\nto find the image name for builds.\n\nIssue: RELENG-1073\n\nChange-Id: Iffebd2b7e6b282d3e17a7bd6de1452e063f64603\nSigned-off-by: Trevor Bramwell \u003ctbramwell@linuxfoundation.org\u003e\n",
      "createdOnDate": 1531523458000,
      "lastUpdatedDate": 1531754529000,
      "isOpen": true,
      "status": "NEW",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["agardner"],
        ids["askb"],
        ids["valderrv"],
        ids["jeremyphelps"],
        ids["lf-jenkins"],
        ids["bramwelttest"],
        ids["tijohnson"]
      ],
      "comments": [
        {
          "timestamp": 1531523458000,
          "reviewer": ids["bramwelt"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1531523639000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/644/"
        },
        {
          "timestamp": 1531523807000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/644/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/644"
        },
        {
          "timestamp": 1531524141000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1: Code-Review+1\n\nDefinitely like it..would require that folks install this plugin before using this JJB so wanna get more approvals."
        },
        {
          "timestamp": 1531536889000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n(2 comments)"
        },
        {
          "timestamp": 1531754529000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review-1\n\n(2 comments)\n\nThis needs testing somewhere"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "59810b49ca6f23d550c7a467d07da04d9aab2e0c",
          "parents": [
            "9edb84822a5ec8c646fb39780cd1f4f57537a648"
          ],
          "ref": "refs/changes/86/11786/1",
          "uploader": ids["bramwelt"],
          "createdOnDate": 1531523458000,
          "author": ids["bramwelt"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1531754529000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1531524141000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1531523807000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 15,
              "reviewer": ids["agrimberg"],
              "message": "As Thanh mentions, this needs to be moved down so that it\u0027s part of the footer, not floating as part of the message body!",
              "patchSetTimestamp": 1531523458000
            },
            {
              "file": "/COMMIT_MSG",
              "line": 16,
              "reviewer": ids["zxiiro"],
              "message": "Move Issue: down one so that it\u0027s attached to the footer.",
              "patchSetTimestamp": 1531523458000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 962,
              "reviewer": ids["zxiiro"],
              "message": "I think this will conflict with the publisher that also writes stuff to the build description. I wonder if we can append somehow.",
              "patchSetTimestamp": 1531523458000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 962,
              "reviewer": ids["agrimberg"],
              "message": "I think you\u0027re correct that it\u0027s going to conflict with our current use in the lf-infra-ship-logs.\n\n@Trevor can you please verify in a sandbox if we end up with a single one of these defined or if JJB is managing to insert 2 description setters because it\u0027s coming in via XML and both actually work then?",
              "patchSetTimestamp": 1531523458000
            }
          ],
          "sizeInsertions": 2,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Ifdbf6c647a80e1d9e96e159a9bd7e2c097cd9400",
      "commitNumber": 10236,
      "subject": "Add pipefail",
      "owner": ids["valderrv"],
      "url": "https://gerrit.linuxfoundation.org/infra/10236",
      "commitMessage": "Add pipefail\n\nIf the SET_JDK_VERSION is not set the script still runs but doesn\u0027t\nconfigure JAVA_HOME properly. This change foreces the script to fail if\nSET_JDK_VERSION is not set.\n\nChange-Id: Ifdbf6c647a80e1d9e96e159a9bd7e2c097cd9400\nSigned-off-by: Vanessa Rene Valderrama \u003cvvalderrama@linuxfoundation.org\u003e\n",
      "createdOnDate": 1524685518000,
      "lastUpdatedDate": 1529935650000,
      "isOpen": true,
      "status": "NEW",
      "reviewers": [
        ids["agardner"],
        ids["lf-jenkins"],
        ids["agrimberg"],
        ids["zxiiro"]
      ],
      "comments": [
        {
          "timestamp": 1524685518000,
          "reviewer": ids["valderrv"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1524685958000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/393/"
        },
        {
          "timestamp": 1524686194000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/393/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/393"
        },
        {
          "timestamp": 1524689275000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 1: Code-Review+1\n\n(1 comment)\n\nI have no problem with setting to \u0027strict mode\u0027 but the patch titled pipe-fail and only -u is needed for this case."
        },
        {
          "timestamp": 1524694918000,
          "reviewer": ids["valderrv"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1524694970000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/394/"
        },
        {
          "timestamp": 1524695120000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/394/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/394"
        },
        {
          "timestamp": 1525103948000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 2: Code-Review-1\n\nI think this is good, but I\u0027m slightly worried that we may be introducing a change that requires updates to jobs. Please add a note to the release notes stating that java-version must get set either globally or at the job level!"
        },
        {
          "timestamp": 1529935650000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review-1\n\nI think this change won\u0027t resolve what the commit description describes. SET_JDK_VERSION appears to have a default version defined in the scripts so the script will always successfully run.\n\nWe need to probably pass a non-valid option to SET_JDK_VERSION and check if it\u0027s set and make a decision to exit out of the script based on that logic."
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "3513473d69aadd89f346f7aaf0a81de97b1d0f9c",
          "parents": [
            "cb633b472a2e7a814b24071299d2cde41247f1df"
          ],
          "ref": "refs/changes/36/10236/1",
          "uploader": ids["valderrv"],
          "createdOnDate": 1524685518000,
          "author": ids["valderrv"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1524689275000,
              "grantedBy": ids["agardner"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1524686194000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/update-java-alternatives.sh",
              "line": 20,
              "reviewer": ids["agardner"],
              "message": "Only the set -u (nounset) is needed to exit on undeclared variables.",
              "patchSetTimestamp": 1524685518000
            }
          ],
          "sizeInsertions": 2,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "6c105240553a72ddc77ee21329d0dc1f53b27000",
          "parents": [
            "cb633b472a2e7a814b24071299d2cde41247f1df"
          ],
          "ref": "refs/changes/36/10236/2",
          "uploader": ids["valderrv"],
          "createdOnDate": 1524694918000,
          "author": ids["valderrv"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1525103948000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1529935650000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1524695120000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Id7ddb55c34a741d92b1e126f1237fb9753a4aa75",
      "commitNumber": 10924,
      "subject": "Add INFO.yaml verify jobs",
      "owner": ids["jwagantall"],
      "url": "https://gerrit.linuxfoundation.org/infra/10924",
      "commitMessage": "Add INFO.yaml verify jobs\n\nAdd \u0027{project-name}-info-yaml-jobs\u0027 and\n\u0027{project-name}-github-info-yaml-jobs\u0027 to validate that\nINFO.yaml file changes are kept isolated from other file\nchanges.\n\nThe addition of or changes to an INFO.yaml should be kept\non its own gerrit change and should not be combined with other\nchanges.\n\nIssue: RELENG-973\nChange-Id: Id7ddb55c34a741d92b1e126f1237fb9753a4aa75\nSigned-off-by: Jessica Wagantall \u003cjwagantall@linuxfoundation.org\u003e\nCo-Authored-By: Trevor Bramwell \u003ctbramwell@linuxfoundation.org\u003e\n",
      "createdOnDate": 1527822426000,
      "lastUpdatedDate": 1529698399000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["jwagantall"],
        ids["bramwelt"],
        ids["agrimberg"],
        ids["zxiiro"],
        ids["agardner"]
      ],
      "comments": [
        {
          "timestamp": 1527822426000,
          "reviewer": ids["jwagantall"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1527822467000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/465/ (1/2)"
        },
        {
          "timestamp": 1527822512000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/173/ (2/2)"
        },
        {
          "timestamp": 1527822546000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 2: Published edit on patch set 1."
        },
        {
          "timestamp": 1527822552000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1527822567000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/465/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/465/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/465\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/173/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/173/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/173"
        },
        {
          "timestamp": 1527822612000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/466/ (1/2)"
        },
        {
          "timestamp": 1527822647000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/174/ (2/2)"
        },
        {
          "timestamp": 1527822821000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/174/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/174/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/174\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/466/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/466"
        },
        {
          "timestamp": 1527872170000,
          "reviewer": ids["bramwelt"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1527872223000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/471/ (1/2)"
        },
        {
          "timestamp": 1527872310000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 3:\n\nHey Jessica, since we\u0027re starting on INFO.yaml validation I wanted to include the work I started in OPNFV (but haven\u0027t merged yet) to verify the schema as well.\n\nSome of these files are Apache v2.0, which I believe we could relicense if needed as I\u0027m the original author.\n\nThanks for starting this, and I hope you don\u0027t take offense to me hijacking your patch! :)"
        },
        {
          "timestamp": 1527872312000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/179/ (2/2)"
        },
        {
          "timestamp": 1527872374000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/471/ : FAILURE\n\nFile shell/info-file-schema.yaml is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/471/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/471\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/179/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/179/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/179"
        },
        {
          "timestamp": 1527872390000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 3:\n\nNot at all!\nThanks so much for joining forces here Trevor!\nI appreciate it!\n\nLet me review your changes"
        },
        {
          "timestamp": 1527872397000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 3:\n\nWork still need to be done to allow the job to run the verify script, which may require a separate clone?"
        },
        {
          "timestamp": 1527873874000,
          "reviewer": ids["bramwelt"],
          "message": "Uploaded patch set 4: Commit message was updated."
        },
        {
          "timestamp": 1527873969000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/475/ (1/2)"
        },
        {
          "timestamp": 1527873994000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/182/ (2/2)"
        },
        {
          "timestamp": 1527874191000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/475/ : FAILURE\n\nFile shell/info-file-schema.yaml is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/475/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/475\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/182/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/182/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/182"
        },
        {
          "timestamp": 1527874248000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 5: Published edit on patch set 4."
        },
        {
          "timestamp": 1527874349000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/476/ (1/2)"
        },
        {
          "timestamp": 1527874374000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/183/ (2/2)"
        },
        {
          "timestamp": 1527874568000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/476/ : FAILURE\n\nFile shell/info-file-schema.yaml is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/476/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/476\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/183/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/183"
        },
        {
          "timestamp": 1527874795000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 6: Published edit on patch set 5."
        },
        {
          "timestamp": 1527874804000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/477/ (1/2)"
        },
        {
          "timestamp": 1527874865000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/184/ (2/2)"
        },
        {
          "timestamp": 1527875025000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/477/ : FAILURE\n\nFile shell/info-file-schema.yaml is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/477/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/477\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/184/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/184"
        },
        {
          "timestamp": 1527877582000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 6: Code-Review-1\n\n(5 comments)"
        },
        {
          "timestamp": 1527891035000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 7: Published edit on patch set 6."
        },
        {
          "timestamp": 1527891063000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 6:\n\n(5 comments)"
        },
        {
          "timestamp": 1527891095000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/478/ (1/2)"
        },
        {
          "timestamp": 1527891120000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/185/ (2/2)"
        },
        {
          "timestamp": 1527891267000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/478/ : FAILURE\n\nFile shell/info-file-schema.yaml is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/478/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/478\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/185/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/185"
        },
        {
          "timestamp": 1528153283000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 8: Patch Set 7 was rebased"
        },
        {
          "timestamp": 1528153373000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/494/ (1/3)"
        },
        {
          "timestamp": 1528153423000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/195/ (2/3)"
        },
        {
          "timestamp": 1528153463000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-common-packer-rtd-verify-any/5/ (3/3)"
        },
        {
          "timestamp": 1528153550000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/494/ : FAILURE\n\nFile shell/info-file-schema.yaml is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/494/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/494\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/195/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/195\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-common-packer-rtd-verify-any/5/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-common-packer-rtd-verify-any/5"
        },
        {
          "timestamp": 1528483764000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 9: Patch Set 8 was rebased"
        },
        {
          "timestamp": 1528483878000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/523/ (1/3)"
        },
        {
          "timestamp": 1528483913000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/215/ (2/3)"
        },
        {
          "timestamp": 1528483918000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-common-packer-rtd-verify-any/60/ (3/3)"
        },
        {
          "timestamp": 1528484084000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/523/ : FAILURE\n\nFile shell/info-file-schema.yaml is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/523/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/523\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/215/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/215\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-common-packer-rtd-verify-any/60/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-common-packer-rtd-verify-any/60"
        },
        {
          "timestamp": 1528557894000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 9: Code-Review-1\n\n(11 comments)\n\nWere these files written by LF staff? if so perhaps we can relicense to EPL-1.0?"
        },
        {
          "timestamp": 1528780343000,
          "reviewer": ids["jwagantall"],
          "message": "Uploaded patch set 10."
        },
        {
          "timestamp": 1528780360000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 10:\n\n(10 comments)"
        },
        {
          "timestamp": 1528780416000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 10:\n\nTrevor, can we change the license of your files to EPL-1.0?\n\nThanks!\nJess"
        },
        {
          "timestamp": 1528780425000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/543/ (1/2)"
        },
        {
          "timestamp": 1528780485000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/219/ (2/2)"
        },
        {
          "timestamp": 1528780606000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/543/ : FAILURE\n\nFile shell/info-file-schema.yaml is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/543/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/543\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/219/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/219"
        },
        {
          "timestamp": 1528818979000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 10:\n\n(1 comment)\n\nStill an open question: Were these files written by LF staff? if so perhaps we can relicense to EPL-1.0?"
        },
        {
          "timestamp": 1528834346000,
          "reviewer": ids["bramwelt"],
          "message": "Uploaded patch set 11."
        },
        {
          "timestamp": 1528834500000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 11:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/546/ (1/2)"
        },
        {
          "timestamp": 1528834776000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 11:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/221/ (2/2)"
        },
        {
          "timestamp": 1528834858000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 11: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/546/ : FAILURE\n\nFile shell/info-yaml-requirements.txt is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/546/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/546\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/221/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/221"
        },
        {
          "timestamp": 1528835648000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 11: Code-Review-1\n\n(3 comments)\n\nI\u0027ve relicensed the files.\n\nOne thing I\u0027d like to note about this change is that we may be imposing a defacto-standard on projects they did not agree to. I think it\u0027s fine to move this forward with the caveat that we start bringing in project in to comment on the format of the INFO.yaml file, and include some disclaimer that the format is still open for discussion.\n\nGiven this schema came out of OPNFV, and meets OPNFV needs, I think its reasonable to assume not all projects will/may have the same needs in what they need to track or list here."
        },
        {
          "timestamp": 1528848195000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 12: Published edit on patch set 11."
        },
        {
          "timestamp": 1528848213000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 12:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/547/ (1/2)"
        },
        {
          "timestamp": 1528848241000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 12:\n\n(3 comments)"
        },
        {
          "timestamp": 1528848279000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 12:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/222/ (2/2)"
        },
        {
          "timestamp": 1528848351000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 12: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/547/ : FAILURE\n\nFile shell/info-yaml-requirements.txt is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/547/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/547\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/222/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/222"
        },
        {
          "timestamp": 1528850215000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 13: Published edit on patch set 12."
        },
        {
          "timestamp": 1528850350000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 13:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/548/ (1/2)"
        },
        {
          "timestamp": 1528850395000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 13:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/223/ (2/2)"
        },
        {
          "timestamp": 1528850567000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 13: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/548/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/548\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/223/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/223"
        },
        {
          "timestamp": 1528850738000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 14: Published edit on patch set 13."
        },
        {
          "timestamp": 1528850846000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 14:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/549/ (1/2)"
        },
        {
          "timestamp": 1528850891000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 14:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/224/ (2/2)"
        },
        {
          "timestamp": 1528850977000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 14: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/549/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/549\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/224/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/224"
        },
        {
          "timestamp": 1528852632000,
          "reviewer": ids["jwagantall"],
          "message": "Uploaded patch set 15."
        },
        {
          "timestamp": 1528852746000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 15:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/550/ (1/2)"
        },
        {
          "timestamp": 1528852786000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 15:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/225/ (2/2)"
        },
        {
          "timestamp": 1528852878000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 15: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/225/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/225/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/225\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/550/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/550"
        },
        {
          "timestamp": 1528859784000,
          "reviewer": ids["jwagantall"],
          "message": "Uploaded patch set 16."
        },
        {
          "timestamp": 1528861217000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 16:\n\nrecheck"
        },
        {
          "timestamp": 1528861343000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 15: Verified+1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/550/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/550"
        },
        {
          "timestamp": 1528861422000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 16:\n\nrecheck"
        },
        {
          "timestamp": 1528899608000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 16:\n\nrecheck"
        },
        {
          "timestamp": 1528899636000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 16:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/551/ (1/2)"
        },
        {
          "timestamp": 1528899678000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 16:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/226/ (2/2)"
        },
        {
          "timestamp": 1528899794000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 16: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/551/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/551\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/226/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/226"
        },
        {
          "timestamp": 1528900649000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 16: Code-Review-1\n\n(7 comments)"
        },
        {
          "timestamp": 1528913186000,
          "reviewer": ids["jwagantall"],
          "message": "Uploaded patch set 17."
        },
        {
          "timestamp": 1528913194000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 16:\n\n(7 comments)"
        },
        {
          "timestamp": 1528913346000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 17:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/554/ (1/2)"
        },
        {
          "timestamp": 1528913539000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 17:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/227/ (2/2)"
        },
        {
          "timestamp": 1528913621000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 17: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/554/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/554\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/227/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/227"
        },
        {
          "timestamp": 1528919473000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 17: Code-Review-1\n\n(3 comments)\n\n-1 as this won\u0027t work as-is"
        },
        {
          "timestamp": 1528919594000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 17:\n\n(1 comment)"
        },
        {
          "timestamp": 1528927850000,
          "reviewer": ids["jwagantall"],
          "message": "Uploaded patch set 18."
        },
        {
          "timestamp": 1528927965000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 18:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/557/ (1/2)"
        },
        {
          "timestamp": 1528928005000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 18:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/229/ (2/2)"
        },
        {
          "timestamp": 1528928101000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 18: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/557/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/557\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/229/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/229"
        },
        {
          "timestamp": 1528928206000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 17:\n\n(4 comments)"
        },
        {
          "timestamp": 1528928559000,
          "reviewer": ids["jwagantall"],
          "message": "Uploaded patch set 19."
        },
        {
          "timestamp": 1528928677000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 19:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/558/ (1/2)"
        },
        {
          "timestamp": 1528928715000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 19:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/230/ (2/2)"
        },
        {
          "timestamp": 1528928835000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 19: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/558/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/558\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/230/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/230"
        },
        {
          "timestamp": 1528931829000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 20: Patch Set 19 was rebased"
        },
        {
          "timestamp": 1528932039000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 20:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/560/ (1/2)"
        },
        {
          "timestamp": 1528932089000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 20:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/232/ (2/2)"
        },
        {
          "timestamp": 1528932208000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 20: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/560/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/560\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/232/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/232"
        },
        {
          "timestamp": 1528932424000,
          "reviewer": ids["jwagantall"],
          "message": "Uploaded patch set 21."
        },
        {
          "timestamp": 1528932541000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 21:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/561/ (1/2)"
        },
        {
          "timestamp": 1528932588000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 21:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/233/ (2/2)"
        },
        {
          "timestamp": 1528932737000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 21: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/561/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/561\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/233/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/233"
        },
        {
          "timestamp": 1528940575000,
          "reviewer": ids["jwagantall"],
          "message": "Uploaded patch set 22."
        },
        {
          "timestamp": 1528940705000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 22:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/562/ (1/2)"
        },
        {
          "timestamp": 1528940725000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 22:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/234/ (2/2)"
        },
        {
          "timestamp": 1528940745000,
          "reviewer": ids["jwagantall"],
          "message": "Uploaded patch set 23."
        },
        {
          "timestamp": 1528940759000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 22: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/562/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/562/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/562\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/234/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/234/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/234"
        },
        {
          "timestamp": 1528940927000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 23:\n\n(2 comments)"
        },
        {
          "timestamp": 1528940995000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 23:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/563/ (1/2)"
        },
        {
          "timestamp": 1528941057000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 23:\n\nlatest sandbox test seems like it marked an INFO.yaml file error:\nhttps://jenkins.onap.org/sandbox/job/aai-aai-data-info-yaml-verify/8/console"
        },
        {
          "timestamp": 1528941154000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 23:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/235/ (2/2)"
        },
        {
          "timestamp": 1528941208000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 23: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/563/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/563\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/235/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/235"
        },
        {
          "timestamp": 1529007108000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 23: Code-Review-1\n\n(5 comments)"
        },
        {
          "timestamp": 1529008788000,
          "reviewer": ids["jwagantall"],
          "message": "Uploaded patch set 24."
        },
        {
          "timestamp": 1529008802000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 24:\n\n(5 comments)"
        },
        {
          "timestamp": 1529008846000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 24:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/565/ (1/2)"
        },
        {
          "timestamp": 1529008869000,
          "reviewer": ids["jwagantall"],
          "message": "Uploaded patch set 25."
        },
        {
          "timestamp": 1529008895000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 24: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/565/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/565/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/565"
        },
        {
          "timestamp": 1529008896000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 25:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/566/ (1/2)"
        },
        {
          "timestamp": 1529008997000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 25:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/237/ (2/2)"
        },
        {
          "timestamp": 1529009096000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 25: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/566/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/566\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/237/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/237"
        },
        {
          "timestamp": 1529010809000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 25:\n\n(2 comments)\n\nLooks good! Just some minor last nits."
        },
        {
          "timestamp": 1529012221000,
          "reviewer": ids["jwagantall"],
          "message": "Uploaded patch set 26."
        },
        {
          "timestamp": 1529012296000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 26:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/567/ (1/2)"
        },
        {
          "timestamp": 1529012348000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 26:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/238/ (2/2)"
        },
        {
          "timestamp": 1529012457000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 26: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/567/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/567\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/238/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/238"
        },
        {
          "timestamp": 1529014998000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 26: Code-Review-1\n\n(4 comments)"
        },
        {
          "timestamp": 1529015355000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 26:\n\n(3 comments)"
        },
        {
          "timestamp": 1529015552000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 26:\n\n(2 comments)"
        },
        {
          "timestamp": 1529085791000,
          "reviewer": ids["jwagantall"],
          "message": "Uploaded patch set 27."
        },
        {
          "timestamp": 1529085799000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 26:\n\n(2 comments)"
        },
        {
          "timestamp": 1529085884000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 28: Patch Set 27 was rebased"
        },
        {
          "timestamp": 1529085915000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 28:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/572/ (1/2)"
        },
        {
          "timestamp": 1529085957000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 28:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/240/ (2/2)"
        },
        {
          "timestamp": 1529085961000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 28:\n\nDoing a final sandbox test"
        },
        {
          "timestamp": 1529086088000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 28: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/572/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/572\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/240/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/240"
        },
        {
          "timestamp": 1529086364000,
          "reviewer": ids["jwagantall"],
          "message": "Uploaded patch set 29."
        },
        {
          "timestamp": 1529086377000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 30: Patch Set 29 was rebased"
        },
        {
          "timestamp": 1529086436000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 30:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/573/ (1/2)"
        },
        {
          "timestamp": 1529086493000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 30:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/241/ (2/2)"
        },
        {
          "timestamp": 1529086530000,
          "reviewer": ids["jwagantall"],
          "message": "Uploaded patch set 31."
        },
        {
          "timestamp": 1529086544000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 30: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/573/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/573/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/573\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/241/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/241/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/241"
        },
        {
          "timestamp": 1529086601000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 31:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/574/ (1/2)"
        },
        {
          "timestamp": 1529086646000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 31:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/242/ (2/2)"
        },
        {
          "timestamp": 1529086760000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 31: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/574/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/574\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/242/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/242"
        },
        {
          "timestamp": 1529088179000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 31: Code-Review+2"
        },
        {
          "timestamp": 1529089229000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 31: Code-Review+2"
        },
        {
          "timestamp": 1529089253000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        },
        {
          "timestamp": 1529698399000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 31:\n\n(1 comment)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "779962dfb29557f26b43430be458f61377612583",
          "parents": [
            "492598352aa58d3aace7f944ef8e7a8a2e82c8a2"
          ],
          "ref": "refs/changes/24/10924/1",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1527822426000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1527822567000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 800,
              "reviewer": ids["jwagantall"],
              "message": "Need to investigate how to make sure github job gets triggered only when an INFO.yaml change file is detected",
              "patchSetTimestamp": 1527822426000
            }
          ],
          "sizeInsertions": 195,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "cc75e41dabf16a998f3357ffff222203b3a9714b",
          "parents": [
            "492598352aa58d3aace7f944ef8e7a8a2e82c8a2"
          ],
          "ref": "refs/changes/24/10924/2",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1527822546000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1527822821000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 195,
          "sizeDeletions": -1
        },
        {
          "number": 3,
          "revision": "a0594035d1d00fb8da890fef8015a29865b1c0ae",
          "parents": [
            "492598352aa58d3aace7f944ef8e7a8a2e82c8a2"
          ],
          "ref": "refs/changes/24/10924/3",
          "uploader": ids["bramwelt"],
          "createdOnDate": 1527872170000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1527872374000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 343,
          "sizeDeletions": -1
        },
        {
          "number": 4,
          "revision": "b239c22cb8f5d1f3c327202608bcb29751919164",
          "parents": [
            "492598352aa58d3aace7f944ef8e7a8a2e82c8a2"
          ],
          "ref": "refs/changes/24/10924/4",
          "uploader": ids["bramwelt"],
          "createdOnDate": 1527873874000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1527874191000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 343,
          "sizeDeletions": -1
        },
        {
          "number": 5,
          "revision": "bc434236f2918a2b4f102117c25c302b7d113502",
          "parents": [
            "492598352aa58d3aace7f944ef8e7a8a2e82c8a2"
          ],
          "ref": "refs/changes/24/10924/5",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1527874248000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1527874568000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 302,
          "sizeDeletions": -1
        },
        {
          "number": 6,
          "revision": "0a583b93d70a987c7a066f8d51c99cfe81e7f69e",
          "parents": [
            "492598352aa58d3aace7f944ef8e7a8a2e82c8a2"
          ],
          "ref": "refs/changes/24/10924/6",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1527874795000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1527877582000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1527875025000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 9,
              "reviewer": ids["agrimberg"],
              "message": "Missing single quote here",
              "patchSetTimestamp": 1527874795000
            },
            {
              "file": "/COMMIT_MSG",
              "line": 9,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1527874795000
            },
            {
              "file": "/COMMIT_MSG",
              "line": 10,
              "reviewer": ids["agrimberg"],
              "message": "validate",
              "patchSetTimestamp": 1527874795000
            },
            {
              "file": "/COMMIT_MSG",
              "line": 10,
              "reviewer": ids["agrimberg"],
              "message": "Missing single quote here",
              "patchSetTimestamp": 1527874795000
            },
            {
              "file": "/COMMIT_MSG",
              "line": 10,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1527874795000
            },
            {
              "file": "/COMMIT_MSG",
              "line": 10,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1527874795000
            },
            {
              "file": "shell/info-file-schema.yaml",
              "line": 36,
              "reviewer": ids["agrimberg"],
              "message": "Why does it feel like this enum is missing states? ODL has projects in more states than just Incubation!",
              "patchSetTimestamp": 1527874795000
            },
            {
              "file": "shell/info-file-schema.yaml",
              "line": 36,
              "reviewer": ids["jwagantall"],
              "message": "Investigating the states. \n\nI have corrected all other comments in the meanwhile",
              "patchSetTimestamp": 1527874795000
            },
            {
              "file": "shell/info-file-schema.yaml",
              "line": 52,
              "reviewer": ids["agrimberg"],
              "message": "There no reason to have this comment here if it\u0027s not being used",
              "patchSetTimestamp": 1527874795000
            },
            {
              "file": "shell/info-file-schema.yaml",
              "line": 52,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1527874795000
            }
          ],
          "sizeInsertions": 303,
          "sizeDeletions": -1
        },
        {
          "number": 7,
          "revision": "ae17afaf7a1a7726ec9f808cf4426df75f23f001",
          "parents": [
            "492598352aa58d3aace7f944ef8e7a8a2e82c8a2"
          ],
          "ref": "refs/changes/24/10924/7",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1527891035000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1527891267000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 302,
          "sizeDeletions": -1
        },
        {
          "number": 8,
          "revision": "e7d928554c15fcff4d0d8be818038e06d72bf9f1",
          "parents": [
            "f269be13382489a33818bdbb262796b5923a4197"
          ],
          "ref": "refs/changes/24/10924/8",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1528153283000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1528153550000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 302,
          "sizeDeletions": -1
        },
        {
          "number": 9,
          "revision": "1224096c5cfbfe669ca8e14aceb82011b28ee39b",
          "parents": [
            "961ef4327102f60f1d81e91b73027f032e144d6e"
          ],
          "ref": "refs/changes/24/10924/9",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1528483764000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1528557894000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1528484084000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "docs/jjb/lf-ci-jobs.rst",
              "line": 35,
              "reviewer": ids["zxiiro"],
              "message": "Jobs to verify INFO.yaml file changes.",
              "patchSetTimestamp": 1528483764000
            },
            {
              "file": "docs/jjb/lf-ci-jobs.rst",
              "line": 35,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1528483764000
            },
            {
              "file": "docs/jjb/lf-ci-jobs.rst",
              "line": 41,
              "reviewer": ids["zxiiro"],
              "message": "What\u0027s different between Gerrit and GitHub that we cannot deploy this job to both?",
              "patchSetTimestamp": 1528483764000
            },
            {
              "file": "docs/jjb/lf-ci-jobs.rst",
              "line": 41,
              "reviewer": ids["jwagantall"],
              "message": "With Github I am not able to restrict the trigger of these jobs. \n\nThese jobs will be triggered for a file pattern matching \"INFO.yaml\" but I cannot specify a pattern in the Github trigger",
              "patchSetTimestamp": 1528483764000
            },
            {
              "file": "docs/jjb/lf-ci-jobs.rst",
              "line": 41,
              "reviewer": ids["zxiiro"],
              "message": "Yes you can. See my series of patches to change all that:\n\nhttps://gerrit.linuxfoundation.org/infra/#/q/topic:included-regions",
              "patchSetTimestamp": 1528483764000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 26,
              "reviewer": ids["zxiiro"],
              "message": "What\u0027s stopping us from adding it right now?",
              "patchSetTimestamp": 1528483764000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 26,
              "reviewer": ids["jwagantall"],
              "message": "See my explanation in docs/jjb/lf-ci-jobs.rst",
              "patchSetTimestamp": 1528483764000
            },
            {
              "file": "shell/info-file-validate.sh",
              "line": 9,
              "reviewer": ids["zxiiro"],
              "message": "Please echo the script name.\n\n echo \u0027--\u003e info-file-validate.sh\u0027",
              "patchSetTimestamp": 1528483764000
            },
            {
              "file": "shell/info-file-validate.sh",
              "line": 9,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1528483764000
            },
            {
              "file": "shell/info-file-validate.sh",
              "line": 10,
              "reviewer": ids["zxiiro"],
              "message": "set -eu -o pipefail\n set -x  # Enable trace",
              "patchSetTimestamp": 1528483764000
            },
            {
              "file": "shell/info-file-validate.sh",
              "line": 10,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1528483764000
            },
            {
              "file": "shell/info-file-validate.sh",
              "line": 14,
              "reviewer": ids["zxiiro"],
              "message": "Use /tmp/v to avoid https://tox.readthedocs.io/en/latest/example/jenkins.html#avoiding-the-path-too-long-error-with-long-shebang-lines\n\n\n source \"/tmp/v/info/bin/activate\"",
              "patchSetTimestamp": 1528483764000
            },
            {
              "file": "shell/info-file-validate.sh",
              "line": 14,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1528483764000
            },
            {
              "file": "shell/info-file-validate.sh",
              "line": 17,
              "reviewer": ids["zxiiro"],
              "message": "This isn\u0027t going to pass shellcheck I think. Is this a newline separated list or a space separated list?",
              "patchSetTimestamp": 1528483764000
            },
            {
              "file": "shell/info-yaml-requirements.txt",
              "line": 4,
              "reviewer": ids["zxiiro"],
              "message": "Files in global-jjb does not get passed into Jenkins. Either generate this file at runtime or the script will have to wget the file from the internet. I think generating at runtime is the easiest way.",
              "patchSetTimestamp": 1528483764000
            },
            {
              "file": "shell/info-yaml-requirements.txt",
              "line": 4,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1528483764000
            },
            {
              "file": "shell/yaml-verify-schema.py",
              "line": 24,
              "reviewer": ids["zxiiro"],
              "message": "One liner pydocs should be written as:\n\n \"\"\"Parse arguments and verify YAML\"\"\"\n\n\nMulti-line pydoc should be written as:\n\n \"\"\"This is the summary line\n \n This is the pydoc body for additional details.\n and can be as many lines as necessary.\n \"\"\"",
              "patchSetTimestamp": 1528483764000
            },
            {
              "file": "shell/yaml-verify-schema.py",
              "line": 24,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1528483764000
            },
            {
              "file": "shell/yaml-verify-schema.py",
              "line": 39,
              "reviewer": ids["zxiiro"],
              "message": "It\u0027s pretty obvious that jsonschema code below has to do with loading the schema. I don\u0027t think this comment adds any value.",
              "patchSetTimestamp": 1528483764000
            },
            {
              "file": "shell/yaml-verify-schema.py",
              "line": 39,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1528483764000
            },
            {
              "file": "shell/yaml-verify-schema.py",
              "line": 45,
              "reviewer": ids["zxiiro"],
              "message": "It\u0027s pretty obvious that the below code is about errors. I don\u0027t think this comment adds any value.",
              "patchSetTimestamp": 1528483764000
            },
            {
              "file": "shell/yaml-verify-schema.py",
              "line": 45,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1528483764000
            }
          ],
          "sizeInsertions": 302,
          "sizeDeletions": -1
        },
        {
          "number": 10,
          "revision": "f04580555df1e6e643520c1f662dfb494386c96a",
          "parents": [
            "9b240453b91f3c4b0844ea1c593721a1c421caa2"
          ],
          "ref": "refs/changes/24/10924/10",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1528780343000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1528780606000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 306,
          "sizeDeletions": -1
        },
        {
          "number": 11,
          "revision": "b3b00466b2f1e77fa571a1060c9431324bc28000",
          "parents": [
            "9b240453b91f3c4b0844ea1c593721a1c421caa2"
          ],
          "ref": "refs/changes/24/10924/11",
          "uploader": ids["bramwelt"],
          "createdOnDate": 1528834346000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1528835648000,
              "grantedBy": ids["bramwelt"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1528834858000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/info-file-schema.yaml",
              "line": 30,
              "reviewer": ids["bramwelt"],
              "message": "One thing we\u0027re missing here is a version, as I assume this schema may change from time to time.",
              "patchSetTimestamp": 1528834346000
            },
            {
              "file": "shell/info-file-schema.yaml",
              "line": 30,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1528834346000
            },
            {
              "file": "shell/info-file-schema.yaml",
              "line": 35,
              "reviewer": ids["bramwelt"],
              "message": "This should be \u0027lifecycle_state\u0027",
              "patchSetTimestamp": 1528834346000
            },
            {
              "file": "shell/info-file-schema.yaml",
              "line": 35,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1528834346000
            },
            {
              "file": "shell/info-file-schema.yaml",
              "line": 52,
              "reviewer": ids["bramwelt"],
              "message": "As there is no format defined for \u0027timezone\u0027 in jsonschema, the previous comment was a note to write either a regex to validate timezones (foo/bar) or implement a validator for them.\n\nhttps://spacetelescope.github.io/understanding-json-schema/reference/string.html?highlight\u003dpattern#format",
              "patchSetTimestamp": 1528834346000
            },
            {
              "file": "shell/info-file-schema.yaml",
              "line": 52,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1528834346000
            }
          ],
          "sizeInsertions": 309,
          "sizeDeletions": -1
        },
        {
          "number": 12,
          "revision": "f363a2d0a1f81560f9e96f62b7162ca2b2c75b44",
          "parents": [
            "9b240453b91f3c4b0844ea1c593721a1c421caa2"
          ],
          "ref": "refs/changes/24/10924/12",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1528848195000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1528848351000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 311,
          "sizeDeletions": -1
        },
        {
          "number": 13,
          "revision": "e5a314cae9a5aac58b69762d3339b22bd3c9cbad",
          "parents": [
            "9b240453b91f3c4b0844ea1c593721a1c421caa2"
          ],
          "ref": "refs/changes/24/10924/13",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1528850215000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1528850567000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 308,
          "sizeDeletions": -1
        },
        {
          "number": 14,
          "revision": "03dadfed1d1c48a55b72258d16aeb4eeaf4637cf",
          "parents": [
            "9b240453b91f3c4b0844ea1c593721a1c421caa2"
          ],
          "ref": "refs/changes/24/10924/14",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1528850738000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1528850977000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 309,
          "sizeDeletions": -1
        },
        {
          "number": 15,
          "revision": "a8a42298f2015a5f246f7dc656a31276e4ffc31e",
          "parents": [
            "4d6ed41749a2e280c3ba438a55ea1e1bf92d1ce9"
          ],
          "ref": "refs/changes/24/10924/15",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1528852632000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1528861343000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 356,
          "sizeDeletions": -1
        },
        {
          "number": 16,
          "revision": "a3f4b55f15f3ff14d923a1df8ee72727221f8d7b",
          "parents": [
            "4d6ed41749a2e280c3ba438a55ea1e1bf92d1ce9"
          ],
          "ref": "refs/changes/24/10924/16",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1528859784000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1528900649000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1528899794000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 67,
              "reviewer": ids["zxiiro"],
              "message": "Since no other jobs are using this anchor and we didn\u0027t create an anchor for the github version let\u0027s move it out of this anchor and into the lf_info_yaml_verify one.",
              "patchSetTimestamp": 1528859784000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 67,
              "reviewer": ids["jwagantall"],
              "message": "Done, switched to rather use gerrit_trigger_file_paths",
              "patchSetTimestamp": 1528859784000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 70,
              "reviewer": ids["zxiiro"],
              "message": "Use REG_EXP instead.\n\nThis way we can make sure the same pattern is applied to both the github job and the Gerrit job as the GitHub one uses regex patterns.",
              "patchSetTimestamp": 1528859784000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 70,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1528859784000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 736,
              "reviewer": ids["zxiiro"],
              "message": "Add a comment above this line stating:\n\n # github_included_regions MUST match gerrit_trigger_file_paths",
              "patchSetTimestamp": 1528859784000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 736,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1528859784000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 778,
              "reviewer": ids["zxiiro"],
              "message": "If following the above advice change this to:\n\n file-paths: \u0027{obj:gerrit_trigger_file_paths}",
              "patchSetTimestamp": 1528859784000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 778,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1528859784000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 801,
              "reviewer": ids["zxiiro"],
              "message": "Please don\u0027t use this macro. I\u0027m trying to remove it. Call the `github-pullrequest` trigger directly.",
              "patchSetTimestamp": 1528859784000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 801,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1528859784000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 804,
              "reviewer": ids["zxiiro"],
              "message": "JJB?",
              "patchSetTimestamp": 1528859784000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 804,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1528859784000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 811,
              "reviewer": ids["zxiiro"],
              "message": "Refer to one of verify jobs in the included-regions patches I made for example on the github-pullrequest sections. it\u0027s not the same as the old style:\n\nhttps://gerrit.linuxfoundation.org/infra/#/c/11190/3/jjb/lf-python-jobs.yaml",
              "patchSetTimestamp": 1528859784000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 811,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1528859784000
            }
          ],
          "sizeInsertions": 356,
          "sizeDeletions": -1
        },
        {
          "number": 17,
          "revision": "d92d70b08e3396400bf1605063c1f7efb09ac4ef",
          "parents": [
            "4d6ed41749a2e280c3ba438a55ea1e1bf92d1ce9"
          ],
          "ref": "refs/changes/24/10924/17",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1528913186000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1528919473000,
              "grantedBy": ids["bramwelt"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1528913621000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/info-file-schema.yaml",
              "line": 1,
              "reviewer": ids["bramwelt"],
              "message": "This file should be renamed info.schema and perhaps relocated along with the python file out of shell?",
              "patchSetTimestamp": 1528913186000
            },
            {
              "file": "shell/info-file-schema.yaml",
              "line": 1,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1528913186000
            },
            {
              "file": "shell/info-file-schema.yaml",
              "line": 12,
              "reviewer": ids["bramwelt"],
              "message": "This is still pointing at OPNFV. It should instead point at the global-jjb schema file.",
              "patchSetTimestamp": 1528913186000
            },
            {
              "file": "shell/info-file-schema.yaml",
              "line": 12,
              "reviewer": ids["jwagantall"],
              "message": "Done\n\nIs this a pointer to the same file itself? i wonder if i added it correctly.",
              "patchSetTimestamp": 1528913186000
            },
            {
              "file": "shell/info-file-validate.sh",
              "line": 23,
              "reviewer": ids["bramwelt"],
              "message": "It doesn\u0027t make sense to write these to a file to immediately install them...we can just \u0027pip install ...\u0027 these in the script.",
              "patchSetTimestamp": 1528913186000
            },
            {
              "file": "shell/info-file-validate.sh",
              "line": 23,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1528913186000
            },
            {
              "file": "shell/info-file-validate.sh",
              "line": 30,
              "reviewer": ids["bramwelt"],
              "message": "There are two ways we could go about this: 1) clone global-jjb as part of the job and cd to where these files are located and execute the script 2) wget the script and schema before executing them.\n\nI\u0027m not sure which is the better approach, though I\u0027m leaning toward git clone (as we don\u0027t have to constantly update the list of files if that changes), and we don\u0027t have to worry about whether or not wget/curl is installed and the plethora of flags they may need.",
              "patchSetTimestamp": 1528913186000
            },
            {
              "file": "shell/info-file-validate.sh",
              "line": 30,
              "reviewer": ids["jwagantall"],
              "message": "Added the instructions but need your input if this is the best way",
              "patchSetTimestamp": 1528913186000
            }
          ],
          "sizeInsertions": 350,
          "sizeDeletions": -1
        },
        {
          "number": 18,
          "revision": "56cda0367c13c16b2334c080695489c7cd44b3f7",
          "parents": [
            "4d6ed41749a2e280c3ba438a55ea1e1bf92d1ce9"
          ],
          "ref": "refs/changes/24/10924/18",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1528927850000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1528928101000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 351,
          "sizeDeletions": -1
        },
        {
          "number": 19,
          "revision": "e3e174712d9ddb3d6af8df2e43a4edbcf62d1c90",
          "parents": [
            "4d6ed41749a2e280c3ba438a55ea1e1bf92d1ce9"
          ],
          "ref": "refs/changes/24/10924/19",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1528928559000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1528928835000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 351,
          "sizeDeletions": -1
        },
        {
          "number": 20,
          "revision": "964b3948cf78cdf80c7e5f31862bf47fe05b1a79",
          "parents": [
            "e154622c6324f2b4a9db3970c074254649d5eaf3"
          ],
          "ref": "refs/changes/24/10924/20",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1528931829000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1528932208000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 351,
          "sizeDeletions": -1
        },
        {
          "number": 21,
          "revision": "85f4c8dc3ec49e7a84a7f8998eeb37a1475be5df",
          "parents": [
            "e154622c6324f2b4a9db3970c074254649d5eaf3"
          ],
          "ref": "refs/changes/24/10924/21",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1528932424000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1528932737000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 351,
          "sizeDeletions": -1
        },
        {
          "number": 22,
          "revision": "d8ac5c1997126b6ba4993ea8d9cb58ecefa555c2",
          "parents": [
            "e154622c6324f2b4a9db3970c074254649d5eaf3"
          ],
          "ref": "refs/changes/24/10924/22",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1528940575000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1528940759000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 348,
          "sizeDeletions": -1
        },
        {
          "number": 23,
          "revision": "73042754bb6ff48ed96bd4b8e1dc5987571fd883",
          "parents": [
            "e154622c6324f2b4a9db3970c074254649d5eaf3"
          ],
          "ref": "refs/changes/24/10924/23",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1528940745000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1529007108000,
              "grantedBy": ids["bramwelt"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1528941208000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "docs/jjb/lf-ci-jobs.rst",
              "line": 110,
              "reviewer": ids["bramwelt"],
              "message": "Not sure this exists? I can\u0027t seem to find the macro...",
              "patchSetTimestamp": 1528940745000
            },
            {
              "file": "docs/jjb/lf-ci-jobs.rst",
              "line": 110,
              "reviewer": ids["jwagantall"],
              "message": "OH yes.. thanks! we removed it .. let me update this",
              "patchSetTimestamp": 1528940745000
            },
            {
              "file": "info-schema",
              "line": 55,
              "reviewer": ids["bramwelt"],
              "message": "This is missing \u0027_\u0027 as in \u0027Los_Angeles\u0027 and \u0027-\u0027 as in \u0027Porto-Novo\u0027\n\nI belive you can list this all as on range: [A-Za-z_-]",
              "patchSetTimestamp": 1528940745000
            },
            {
              "file": "info-schema",
              "line": 55,
              "reviewer": ids["jwagantall"],
              "message": "In ONAP we are using \"Los Angeles\" for example..  :(\n\nDo we have this standardized?",
              "patchSetTimestamp": 1528940745000
            },
            {
              "file": "info-schema",
              "line": 55,
              "reviewer": ids["bramwelt"],
              "message": "It sure is! ;) https://www.iana.org/time-zones\n\n`ls /usr/share/zoneinfo`",
              "patchSetTimestamp": 1528940745000
            },
            {
              "file": "shell/git-validate-info-yaml.sh",
              "line": 11,
              "reviewer": ids["bramwelt"],
              "message": "Missing script name.",
              "patchSetTimestamp": 1528940745000
            },
            {
              "file": "shell/git-validate-info-yaml.sh",
              "line": 11,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1528940745000
            },
            {
              "file": "shell/git-validate-info-yaml.sh",
              "line": 24,
              "reviewer": ids["bramwelt"],
              "message": "This is fine for now, but we may need to revisit it in the future as I just realized I\u0027m not sure if this will work for Github since they allow multiple commits: so HEAD~1 might refer to the previous commit in the PR, instead of there intended merge point.",
              "patchSetTimestamp": 1528940745000
            },
            {
              "file": "shell/git-validate-info-yaml.sh",
              "line": 24,
              "reviewer": ids["jwagantall"],
              "message": "Sure.. I need to check on this and how the repo looks like after \"checking out\" the patchset that we are about to review.",
              "patchSetTimestamp": 1528940745000
            },
            {
              "file": "shell/info-file-validate.sh",
              "line": 21,
              "reviewer": ids["jwagantall"],
              "message": "Cloning from Gerrit since I get a key issue (permissions denied) after trying to clone from Github (ONAP\u0027s sandbox)",
              "patchSetTimestamp": 1528940745000
            },
            {
              "file": "shell/info-file-validate.sh",
              "line": 25,
              "reviewer": ids["jwagantall"],
              "message": "Removed the loop since we are validating already that we only have one single \"INFO.yaml\" being verified in the gerrit. \n\nIf the gerrit to get verified contains changes other than just INFO.yaml, the change gets -1\u0027ed",
              "patchSetTimestamp": 1528940745000
            },
            {
              "file": "yaml-verify-schema.py",
              "line": 48,
              "reviewer": ids["bramwelt"],
              "message": "This should just say \u0027schema\u0027",
              "patchSetTimestamp": 1528940745000
            },
            {
              "file": "yaml-verify-schema.py",
              "line": 48,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1528940745000
            }
          ],
          "sizeInsertions": 345,
          "sizeDeletions": -1
        },
        {
          "number": 24,
          "revision": "5f3a20b5cf7efc6ca0c9c1adc758529bcb31d65e",
          "parents": [
            "e154622c6324f2b4a9db3970c074254649d5eaf3"
          ],
          "ref": "refs/changes/24/10924/24",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1529008788000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1529008895000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 340,
          "sizeDeletions": -1
        },
        {
          "number": 25,
          "revision": "3d057303932ed43368cac3a8f949c26fcf7ff19a",
          "parents": [
            "e154622c6324f2b4a9db3970c074254649d5eaf3"
          ],
          "ref": "refs/changes/24/10924/25",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1529008869000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1529009096000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "docs/jjb/lf-ci-jobs.rst",
              "line": 403,
              "reviewer": ids["bramwelt"],
              "message": "\"... and that INFO.yaml files follow the schema defined in `global-jjb/info-schema`\"",
              "patchSetTimestamp": 1529008869000
            },
            {
              "file": "docs/jjb/lf-ci-jobs.rst",
              "line": 403,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1529008869000
            }
          ],
          "sizeInsertions": 340,
          "sizeDeletions": 0
        },
        {
          "number": 26,
          "revision": "53faf309af02443e21bc295bec4344ab1018c28d",
          "parents": [
            "e154622c6324f2b4a9db3970c074254649d5eaf3"
          ],
          "ref": "refs/changes/24/10924/26",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1529012221000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1529014998000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1529012457000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "docs/jjb/lf-ci-jobs.rst",
              "line": 397,
              "reviewer": ids["zxiiro"],
              "message": "no need for this prefix. just info-yaml-verify is fine.",
              "patchSetTimestamp": 1529012221000
            },
            {
              "file": "docs/jjb/lf-ci-jobs.rst",
              "line": 397,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1529012221000
            },
            {
              "file": "docs/jjb/lf-ci-jobs.rst",
              "line": 430,
              "reviewer": ids["zxiiro"],
              "message": "need a doc for github_included_regions too",
              "patchSetTimestamp": 1529012221000
            },
            {
              "file": "docs/jjb/lf-ci-jobs.rst",
              "line": 430,
              "reviewer": ids["jwagantall"],
              "message": "The github_included_regions is not optional or required, but rather a parameter with a fixed value that is set to match \"INFO.yaml\". Users are not allowed to change this value since this job should only track that pattern. \n\nWill documenting it cause confusion and making people think it is an option? In which section shall I put it if so.",
              "patchSetTimestamp": 1529012221000
            },
            {
              "file": "docs/jjb/lf-ci-jobs.rst",
              "line": 430,
              "reviewer": ids["jwagantall"],
              "message": "Removed gerrit_trigger_file_paths since it is a fixed value",
              "patchSetTimestamp": 1529012221000
            },
            {
              "file": "shell/info-file-validate.sh",
              "line": 21,
              "reviewer": ids["zxiiro"],
              "message": "Use the GitHub mirror URL.",
              "patchSetTimestamp": 1529012221000
            },
            {
              "file": "shell/info-file-validate.sh",
              "line": 21,
              "reviewer": ids["jwagantall"],
              "message": "I tried, but I get this error:\n01:15:57 + git clone git@github.com:lfit/releng-global-jjb.git\n01:15:57 Cloning into \u0027releng-global-jjb\u0027...\n01:15:57 Host key verification failed.\n01:15:57 fatal: Could not read from remote repository.\n01:15:57 \n01:15:57 Please make sure you have the correct access rights\n01:15:57 and the repository exists.\n\n\nIs this just because Sandbox should not be allowed to clone from github?",
              "patchSetTimestamp": 1529012221000
            },
            {
              "file": "shell/info-file-validate.sh",
              "line": 21,
              "reviewer": ids["jwagantall"],
              "message": "Done, my bad I was using the wrong command",
              "patchSetTimestamp": 1529012221000
            },
            {
              "file": "shell/info-file-validate.sh",
              "line": 25,
              "reviewer": ids["zxiiro"],
              "message": "Continuation lines should be indented by 4 spaces.",
              "patchSetTimestamp": 1529012221000
            },
            {
              "file": "shell/info-file-validate.sh",
              "line": 25,
              "reviewer": ids["jwagantall"],
              "message": "Done",
              "patchSetTimestamp": 1529012221000
            }
          ],
          "sizeInsertions": 341,
          "sizeDeletions": 0
        },
        {
          "number": 27,
          "revision": "ac1681cbac39031bdf0eef23805ae0e5811b1b1f",
          "parents": [
            "e154622c6324f2b4a9db3970c074254649d5eaf3"
          ],
          "ref": "refs/changes/24/10924/27",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1529085791000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 331,
          "sizeDeletions": 0
        },
        {
          "number": 28,
          "revision": "ba89dc3bb1ec2bd10d6a832cfe8b7108ff5c61c8",
          "parents": [
            "27090106c7bb23ff93bda6bb9798fe3b94686124"
          ],
          "ref": "refs/changes/24/10924/28",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1529085884000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1529086088000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 331,
          "sizeDeletions": 0
        },
        {
          "number": 29,
          "revision": "132246b0a5da44fa703fc411d49e60cdb3123937",
          "parents": [
            "e154622c6324f2b4a9db3970c074254649d5eaf3"
          ],
          "ref": "refs/changes/24/10924/29",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1529086364000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 333,
          "sizeDeletions": 0
        },
        {
          "number": 30,
          "revision": "583c4f1cae999377ce25f3d7ed4b46f2ece31f02",
          "parents": [
            "27090106c7bb23ff93bda6bb9798fe3b94686124"
          ],
          "ref": "refs/changes/24/10924/30",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1529086377000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1529086544000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 333,
          "sizeDeletions": 0
        },
        {
          "number": 31,
          "revision": "b83660faf15e9b6983d5d6baa031ecec710140b8",
          "parents": [
            "27090106c7bb23ff93bda6bb9798fe3b94686124"
          ],
          "ref": "refs/changes/24/10924/31",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1529086530000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1529089229000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1529089253000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1529088179000,
              "grantedBy": ids["bramwelt"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1529086760000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "info-schema",
              "line": 16,
              "reviewer": ids["agardner"],
              "message": "We dont have this in OPNFV info.yaml files.",
              "patchSetTimestamp": 1529086530000
            }
          ],
          "sizeInsertions": 333,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "If2edba598b47484b1708f1e0f3fb96f035511841",
      "commitNumber": 10212,
      "subject": "Configure tox tests allow serial execution",
      "owner": ids["valderrv"],
      "url": "https://gerrit.linuxfoundation.org/infra/10212",
      "commitMessage": "Configure tox tests allow serial execution\n\nConfiguring tox tests to allow serial or parallel execution configurable\nwithin JJB by setting the PARALLEL parameter to true or false.\n\nIssue: RELENG-912\nChange-Id: If2edba598b47484b1708f1e0f3fb96f035511841\nSigned-off-by: Vanessa Rene Valderrama \u003cvvalderrama@linuxfoundation.org\u003e\n",
      "createdOnDate": 1524600060000,
      "lastUpdatedDate": 1529674103000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["valderrv"],
        ids["lf-jenkins"],
        ids["agardner"],
        ids["bramwelt"],
        ids["agrimberg"]
      ],
      "comments": [
        {
          "timestamp": 1524600060000,
          "reviewer": ids["valderrv"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1524600097000,
          "reviewer": ids["valderrv"],
          "message": "Patch Set 1: Code-Review-2\n\nThis change is a work in progress and not ready for review."
        },
        {
          "timestamp": 1524602508000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1524602980000,
          "reviewer": ids["valderrv"],
          "message": "Uploaded patch set 2: Commit message was updated."
        },
        {
          "timestamp": 1524603019000,
          "reviewer": ids["valderrv"],
          "message": "Patch Set 1: -Code-Review"
        },
        {
          "timestamp": 1524603099000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/387/"
        },
        {
          "timestamp": 1524603270000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/387/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/387/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/387"
        },
        {
          "timestamp": 1524604140000,
          "reviewer": ids["valderrv"],
          "message": "Patch Set 2: -Code-Review"
        },
        {
          "timestamp": 1524608140000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review-1\n\n(2 comments)\n\n@Vaness not sure if you\u0027re ready for review since you removed the code-review vote but the code hasn\u0027t changed since patchset 1. The current patch seems incomplete and does not seem to tie into JJB. We need to add the parallel parameter to the JJB side of the code."
        },
        {
          "timestamp": 1524676208000,
          "reviewer": ids["valderrv"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1524676422000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/391/"
        },
        {
          "timestamp": 1524676582000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/391/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/391/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/391"
        },
        {
          "timestamp": 1524676819000,
          "reviewer": ids["valderrv"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1524677041000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/392/"
        },
        {
          "timestamp": 1524677246000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/392/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/392"
        },
        {
          "timestamp": 1524690472000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 4: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1524769528000,
          "reviewer": ids["valderrv"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1524769582000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/395/"
        },
        {
          "timestamp": 1524769795000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/395/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/395"
        },
        {
          "timestamp": 1524770305000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 5:\n\n(1 comment)\n\nHave you added a \u0027PARALLEL\u0027 parameter to the job config?"
        },
        {
          "timestamp": 1524770656000,
          "reviewer": ids["valderrv"],
          "message": "Patch Set 5:\n\n(1 comment)\n\nI added the PARALLEL parameter to lf-python-jobs.yaml"
        },
        {
          "timestamp": 1524841616000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 5: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1524845730000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4:\n\n(1 comment)"
        },
        {
          "timestamp": 1524849280000,
          "reviewer": ids["valderrv"],
          "message": "Uploaded patch set 6."
        },
        {
          "timestamp": 1524849440000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/398/"
        },
        {
          "timestamp": 1524849609000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/398/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/398"
        },
        {
          "timestamp": 1525094161000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 6: Code-Review-1\n\n(1 comment)\n\nPlease link to a sandbox test showing the parallel parameter working."
        },
        {
          "timestamp": 1525122146000,
          "reviewer": ids["valderrv"],
          "message": "Uploaded patch set 7."
        },
        {
          "timestamp": 1525122163000,
          "reviewer": ids["valderrv"],
          "message": "Patch Set 7: Code-Review-1\n\ntesting on the sandbox"
        },
        {
          "timestamp": 1525122321000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/402/"
        },
        {
          "timestamp": 1525122520000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/402/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/402"
        },
        {
          "timestamp": 1525204095000,
          "reviewer": ids["valderrv"],
          "message": "Patch Set 7: -Code-Review\n\nSandbox link:  https://jenkins.acumos.org/sandbox/job/acumos-python-client-tox-verify-master/\n\nTests include:\nNot setting parallel\nparallel\u003dtrue\nparallel\u003dfalse"
        },
        {
          "timestamp": 1525207059000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7: Code-Review+1\n\nLooks good, thanks!"
        },
        {
          "timestamp": 1525288676000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 7: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1525289434000,
          "reviewer": ids["valderrv"],
          "message": "Uploaded patch set 8: Commit message was updated."
        },
        {
          "timestamp": 1525289453000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 8: Code-Review+2"
        },
        {
          "timestamp": 1525289513000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 8: Code-Review+1"
        },
        {
          "timestamp": 1525289691000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/403/"
        },
        {
          "timestamp": 1525289842000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/403/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/403"
        },
        {
          "timestamp": 1525305799000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        },
        {
          "timestamp": 1529674103000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 8:\n\nDoh, just realized this patch causes a bug described here: RELENG-1042\n\nworking on a fix now..."
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "8734c3d3bf13e7de97ac369523ad0d4dd4802338",
          "parents": [
            "0b1d0ba4945b93dc5d86fffef20f4be44fc5a2f9"
          ],
          "ref": "refs/changes/12/10212/1",
          "uploader": ids["valderrv"],
          "createdOnDate": 1524600060000,
          "author": ids["valderrv"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 12,
              "reviewer": ids["zxiiro"],
              "message": "Just above the Change-Id line add:\n\n Issue: RELENG-912\n\nThis way we can reference back to the Jira if needed.",
              "patchSetTimestamp": 1524600060000
            }
          ],
          "sizeInsertions": 20,
          "sizeDeletions": -6
        },
        {
          "number": 2,
          "revision": "8681d951bb1ed9f942bb148f5b7647a1a3e9394c",
          "parents": [
            "0b1d0ba4945b93dc5d86fffef20f4be44fc5a2f9"
          ],
          "ref": "refs/changes/12/10212/2",
          "uploader": ids["valderrv"],
          "createdOnDate": 1524602980000,
          "author": ids["valderrv"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1524608140000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1524603270000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/tox-run.sh",
              "line": 32,
              "reviewer": ids["zxiiro"],
              "message": "This needs to be hooked into JJB.",
              "patchSetTimestamp": 1524602980000
            },
            {
              "file": "shell/tox-run.sh",
              "line": 40,
              "reviewer": ids["zxiiro"],
              "message": "We should probably rename detox_status to just tox_status so that the test at the bottom of this script can parse both tox and detox statuses.",
              "patchSetTimestamp": 1524602980000
            }
          ],
          "sizeInsertions": 20,
          "sizeDeletions": -6
        },
        {
          "number": 3,
          "revision": "f19eb7370a39105f24648a1d243e7bcc652b3f25",
          "parents": [
            "cb633b472a2e7a814b24071299d2cde41247f1df"
          ],
          "ref": "refs/changes/12/10212/3",
          "uploader": ids["valderrv"],
          "createdOnDate": 1524676208000,
          "author": ids["valderrv"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1524676582000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 21,
          "sizeDeletions": -6
        },
        {
          "number": 4,
          "revision": "79a482599e716ded98735bc9e0a19d1abd8fbe0c",
          "parents": [
            "cb633b472a2e7a814b24071299d2cde41247f1df"
          ],
          "ref": "refs/changes/12/10212/4",
          "uploader": ids["valderrv"],
          "createdOnDate": 1524676819000,
          "author": ids["valderrv"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1524690472000,
              "grantedBy": ids["agardner"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1524677246000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/tox-run.sh",
              "line": 32,
              "reviewer": ids["agardner"],
              "message": "why is this set? also, perhaps catch if PARALLEL is unset set to false.",
              "patchSetTimestamp": 1524676819000
            },
            {
              "file": "shell/tox-run.sh",
              "line": 32,
              "reviewer": ids["zxiiro"],
              "message": "PARALLEL\u003d\"${PARALLEL:-true}\"",
              "patchSetTimestamp": 1524676819000
            }
          ],
          "sizeInsertions": 22,
          "sizeDeletions": -7
        },
        {
          "number": 5,
          "revision": "2192111889305dd00fa7d0f9bbcee00eebcd5360",
          "parents": [
            "cb633b472a2e7a814b24071299d2cde41247f1df"
          ],
          "ref": "refs/changes/12/10212/5",
          "uploader": ids["valderrv"],
          "createdOnDate": 1524769528000,
          "author": ids["valderrv"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1524841616000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1524769795000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-python-jobs.yaml",
              "line": 101,
              "reviewer": ids["zxiiro"],
              "message": "I think you meant to put this in the tox job configuration. This here is applying it to the \"CLM\" job not tox.\n\nAlso you need to add a string parameter in the \"parameters:\" section of JJB for Jenkins to add an actual parameter. The definition here purely is to tell JJB what variable \"parallel\" should be set to by default if the user does not provide on. We still need to define the parameter itself.",
              "patchSetTimestamp": 1524769528000
            },
            {
              "file": "shell/tox-run.sh",
              "line": 52,
              "reviewer": ids["bramwelt"],
              "message": "Since the default has been to run tox in parallel, instead of checking if Parallel is unset, it can always default to true \"PARALLEL\u003d${PARALLEL:-true}\".",
              "patchSetTimestamp": 1524769528000
            },
            {
              "file": "shell/tox-run.sh",
              "line": 52,
              "reviewer": ids["valderrv"],
              "message": "I changed the patch to catch if PARALLEL is unset set to false based on a previous review.",
              "patchSetTimestamp": 1524769528000
            }
          ],
          "sizeInsertions": 23,
          "sizeDeletions": -7
        },
        {
          "number": 6,
          "revision": "39be1026ce4511f78351a77e7f7a94be4f71806c",
          "parents": [
            "cb633b472a2e7a814b24071299d2cde41247f1df"
          ],
          "ref": "refs/changes/12/10212/6",
          "uploader": ids["valderrv"],
          "createdOnDate": 1524849280000,
          "author": ids["valderrv"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1525094161000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1524849609000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-python-jobs.yaml",
              "line": 447,
              "reviewer": ids["zxiiro"],
              "message": "parallel is not a valid parameter of the git-scm plugin:\n\nhttps://docs.openstack.org/infra/jenkins-job-builder/scm.html\n\nThis is not what we need here though. What we to do is define a environment variable that Jenkins passes to the bash script. To do that we need to declare a Jenkins Parameter. You can do that using the \"string\" parameter in JJB:\n\nhttps://docs.openstack.org/infra/jenkins-job-builder/parameters.html\n\nWe have a few examples of this in global-jjb for example in the Python CLM job:\n\nhttps://github.com/lfit/releng-global-jjb/blob/master/jjb/lf-python-jobs.yaml#L110-L114",
              "patchSetTimestamp": 1524849280000
            }
          ],
          "sizeInsertions": 20,
          "sizeDeletions": -6
        },
        {
          "number": 7,
          "revision": "61a01a9ce259bafec0045901b3c91788c05ea236",
          "parents": [
            "35adc33717a2a9ca867c5a624904a963d8449ae6"
          ],
          "ref": "refs/changes/12/10212/7",
          "uploader": ids["valderrv"],
          "createdOnDate": 1525122146000,
          "author": ids["valderrv"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1525288676000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1525207059000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1525122520000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 12,
              "reviewer": ids["agrimberg"],
              "message": "This really should be\n\nIssue: RELENG-912\n\nI don\u0027t like seeing non-annotated footer meta-data",
              "patchSetTimestamp": 1525122146000
            }
          ],
          "sizeInsertions": 27,
          "sizeDeletions": -6
        },
        {
          "number": 8,
          "revision": "68bfb0c6bd7ba0c23e665ba4045acbba0e26af02",
          "parents": [
            "35adc33717a2a9ca867c5a624904a963d8449ae6"
          ],
          "ref": "refs/changes/12/10212/8",
          "uploader": ids["valderrv"],
          "createdOnDate": 1525289434000,
          "author": ids["valderrv"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1525289453000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1525305799000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1525289513000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1525289842000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 27,
          "sizeDeletions": -6
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Ia24912694223d4e8df81f591829dfb4b4ed5ff22",
      "commitNumber": 10933,
      "subject": "Release global-jjb v0.20.0",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/10933",
      "commitMessage": "Release global-jjb v0.20.0\n\nChange-Id: Ia24912694223d4e8df81f591829dfb4b4ed5ff22\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1527873563000,
      "lastUpdatedDate": 1528149337000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["agrimberg"],
        ids["agardner"],
        ids["bramwelt"],
        ids["askb"],
        ids["valderrv"],
        ids["jwagantall"],
        ids["jeremyphelps"],
        ids["jluhrsen"],
        ids["cl778h"],
        ids["fdegir"]
      ],
      "comments": [
        {
          "timestamp": 1527873563000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1527873584000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-2\n\nPlease review, but hold off releasing until Monday."
        },
        {
          "timestamp": 1527873744000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/474/"
        },
        {
          "timestamp": 1527873937000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/474/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/474"
        },
        {
          "timestamp": 1527994200000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1527994303000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/483/"
        },
        {
          "timestamp": 1527994423000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/483/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/483"
        },
        {
          "timestamp": 1528124964000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1528124970000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+1"
        },
        {
          "timestamp": 1528125033000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/488/ (1/2)"
        },
        {
          "timestamp": 1528125078000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/192/ (2/2)"
        },
        {
          "timestamp": 1528125192000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/488/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/488\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/192/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/192"
        },
        {
          "timestamp": 1528127445000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 3: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1528127508000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 3:\n\n(1 comment)"
        },
        {
          "timestamp": 1528127659000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\n(2 comments)"
        },
        {
          "timestamp": 1528127837000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1528127953000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        },
        {
          "timestamp": 1528149337000,
          "reviewer": ids["askb"],
          "message": "Patch Set 3: Code-Review+1"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "b64773220f85432331861c22bb4e20052193a418",
          "parents": [
            "86e26cea99847511bc199afaf981cc41e5934d64"
          ],
          "ref": "refs/changes/33/10933/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1527873563000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -2,
              "grantedOnDate": 1527873584000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1527873937000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 46,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "c9d1ba5492e983981a4c5f3cb1b0cc13e4209345",
          "parents": [
            "ed23bb62a50a877c2b6b5904cc4963968f17acc3"
          ],
          "ref": "refs/changes/33/10933/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1527994200000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -2,
              "grantedOnDate": 1527873584000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1527994423000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 45,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "d1b7f48bb76729ddde974357b4de845db71bb5a8",
          "parents": [
            "ed23bb62a50a877c2b6b5904cc4963968f17acc3"
          ],
          "ref": "refs/changes/33/10933/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1528124964000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1528124970000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1528127953000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1528127837000,
              "grantedBy": ids["bramwelt"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1528149337000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1528125192000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "docs/conf.py",
              "line": 72,
              "reviewer": ids["bramwelt"],
              "message": "Oh, we should update global-jjb to use lfdocs-conf...just a note. This looks good though.",
              "patchSetTimestamp": 1528124964000
            },
            {
              "file": "docs/conf.py",
              "line": 72,
              "reviewer": ids["zxiiro"],
              "message": "Yes, there was a problem with it though and I backed out awhile ago. I can\u0027t remember what the problem was....",
              "patchSetTimestamp": 1528124964000
            },
            {
              "file": "relnotes/v0.20.0.txt",
              "line": 15,
              "reviewer": ids["bramwelt"],
              "message": "0.19.1 or .2",
              "patchSetTimestamp": 1528124964000
            },
            {
              "file": "relnotes/v0.20.0.txt",
              "line": 15,
              "reviewer": ids["zxiiro"],
              "message": "Considering release notes were not sent out for the 0.19.2 release the change log includes everything from 0.19.0.",
              "patchSetTimestamp": 1528124964000
            }
          ],
          "sizeInsertions": 46,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I2ba93417614977741999151cd155a4a165b0229a",
      "commitNumber": 10700,
      "subject": "Use a temporary directory for jjb-installs",
      "owner": ids["bramwelt"],
      "url": "https://gerrit.linuxfoundation.org/infra/10700",
      "commitMessage": "Use a temporary directory for jjb-installs\n\nWhen jjb-verify and jjb-merge jobs get scheduled on the same static\nnode only one can run at a time. So when jjb-merge is running any\njjb-verify jobs triggered during that time fail.\n\nChange-Id: I2ba93417614977741999151cd155a4a165b0229a\nSigned-off-by: Trevor Bramwell \u003ctbramwell@linuxfoundation.org\u003e\n",
      "createdOnDate": 1526584006000,
      "lastUpdatedDate": 1527866097000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["agardner"],
        ids["bramwelt"],
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["askb"]
      ],
      "comments": [
        {
          "timestamp": 1526584006000,
          "reviewer": ids["bramwelt"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1526584123000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1526584201000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 1:\n\nTested this locally with:\n\n \u003e JJB_VERSION\u003d2.0.7 bash shell/jjb-install.sh"
        },
        {
          "timestamp": 1526584212000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/442/"
        },
        {
          "timestamp": 1526584274000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review-1\n\nHow are you expecting to pass the random directory to later steps?"
        },
        {
          "timestamp": 1526584357000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/442/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/442"
        },
        {
          "timestamp": 1526584661000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review-2"
        },
        {
          "timestamp": 1526584684000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1:\n\nMy question _must_ be addressed. Not doing so will break all global-jjb verify / merge jobs"
        },
        {
          "timestamp": 1526585914000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 1: -Code-Review\n\nI guess $GERRIT_CHANGE_NUMBER work either.."
        },
        {
          "timestamp": 1526586015000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 1:\n\nwhat about.\n\n      - build-blocker:\n          use-build-blocker: true\n          blocking-jobs:\n            - \u0027releng-jjb-*\u0027\n          block-level: \u0027NODE\u0027"
        },
        {
          "timestamp": 1526586418000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1:\n\n\u003e I guess $GERRIT_CHANGE_NUMBER work either..\n\n????"
        },
        {
          "timestamp": 1526586472000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 1:\n\n@andy I meant using the GERRIT change as part of the tmp directory"
        },
        {
          "timestamp": 1526586535000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1:\n\n\u003e what about.\n \u003e \n \u003e - build-blocker:\n \u003e use-build-blocker: true\n \u003e blocking-jobs:\n \u003e - \u0027releng-jjb-*\u0027\n \u003e block-level: \u0027NODE\u0027\n\nThe best way forward would be the following:\n\n* Write out a env injection file with the path as part of this script\n\n* Update the JJB build out macro that calls this script to then inject into the environment the env var\n\n* Update the script that runs jjb in verify or merge function to use the env var\n\n* Add a clean-up script that runs after to make sure the tmp dir is gone"
        },
        {
          "timestamp": 1526586630000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1:\n\n\u003e @andy I meant using the GERRIT change as part of the tmp directory\n\nEven if you go that route, if you want this to be able to execute concurrently (and safely) on a static node, you\u0027re going to need to add a cleanup script or your going to potentially run out of disk space if it runs often enough.\n\nGoing the mktemp route is fine, but it has to be properly handled and cleaned up"
        },
        {
          "timestamp": 1526588527000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 1:\n\n\u003e How are you expecting to pass the random directory to later steps?\n\nI don\u0027t see \u0027/tmp/v/jjb\u0027 used anywhere else, so I\u0027m not sure which later step would use this? From what I can see all the build steps related to jjb happen after this on the same node: so once the venv is created and activated, there\u0027s nothing left for them to do."
        },
        {
          "timestamp": 1526588625000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 1:\n\n\u003e \u003e @andy I meant using the GERRIT change as part of the tmp\n \u003e directory\n \u003e \n \u003e Even if you go that route, if you want this to be able to execute\n \u003e concurrently (and safely) on a static node, you\u0027re going to need to\n \u003e add a cleanup script or your going to potentially run out of disk\n \u003e space if it runs often enough.\n \u003e \n \u003e Going the mktemp route is fine, but it has to be properly handled\n \u003e and cleaned up\n\nAh yeah, not cleaning up the directory would definitely be a problem."
        },
        {
          "timestamp": 1526589509000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review-1\n\n\u003e \u003e How are you expecting to pass the random directory to later\n \u003e steps?\n \u003e \n \u003e I don\u0027t see \u0027/tmp/v/jjb\u0027 used anywhere else, so I\u0027m not sure which\n \u003e later step would use this? From what I can see all the build steps\n \u003e related to jjb happen after this on the same node: so once the venv\n \u003e is created and activated, there\u0027s nothing left for them to do.\n\nI just looked at how the jjb-install.sh is being used, you\u0027re correct.\nI was misremembering how the verify and merge jobs go together.\n\nSo, the only thing outstanding is the tmpdir cleanup that needs to be\nadded as an extra script and step for those jobs.\n\nDowngrading to -1 as it\u0027s not as breaking as I thought"
        },
        {
          "timestamp": 1526590295000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 1:\n\n\u003e what about.\n \u003e \n \u003e - build-blocker:\n \u003e use-build-blocker: true\n \u003e blocking-jobs:\n \u003e - \u0027releng-jjb-*\u0027\n \u003e block-level: \u0027NODE\u0027\n\nThis would add an extra plugin requirement to global-jjb and not allow for multiple runs of jjb jobs on a static node, which doesn\u0027t make sense if this is already fixing the underlying issue."
        },
        {
          "timestamp": 1526593633000,
          "reviewer": ids["bramwelt"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1526593683000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/444/"
        },
        {
          "timestamp": 1526593836000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/444/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/444"
        },
        {
          "timestamp": 1526595057000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 2: Code-Review+1\n\nI think this is much better"
        },
        {
          "timestamp": 1526596356000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1526596668000,
          "reviewer": ids["bramwelt"],
          "message": "Change has been successfully merged by Trevor Bramwell"
        },
        {
          "timestamp": 1526597447000,
          "reviewer": ids["askb"],
          "message": "Patch Set 2: Code-Review+1"
        },
        {
          "timestamp": 1527866097000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+2\n\nThis works. I\u0027m hoping my proposal in I8b1a0936220ddbeb7f5e051ce15c421fec27c1a0 will simplify some of the coding in the future."
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "f94219a563abb0ac075eba5746d63bce2af1ea30",
          "parents": [
            "aec2a0c78d8ca2d4ea9570cc249bbe55b33643f3"
          ],
          "ref": "refs/changes/00/10700/1",
          "uploader": ids["bramwelt"],
          "createdOnDate": 1526584006000,
          "author": ids["bramwelt"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1526589509000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1526584357000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 4,
          "sizeDeletions": -3
        },
        {
          "number": 2,
          "revision": "1c748f633fba763bdb98cdc337f29b35b8b81e5e",
          "parents": [
            "aec2a0c78d8ca2d4ea9570cc249bbe55b33643f3"
          ],
          "ref": "refs/changes/00/10700/2",
          "uploader": ids["bramwelt"],
          "createdOnDate": 1526593633000,
          "author": ids["bramwelt"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1526595057000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1527866097000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1526596356000,
              "grantedBy": ids["agardner"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1526596668000,
              "grantedBy": ids["bramwelt"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1526597447000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1526593836000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 35,
          "sizeDeletions": -3
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I95d798a34442fcf3ca172b3bdd43260db8a09f3c",
      "commitNumber": 10717,
      "subject": "Fix echo when removing venv in jjb-cleanup.sh",
      "owner": ids["bramwelt"],
      "url": "https://gerrit.linuxfoundation.org/infra/10717",
      "commitMessage": "Fix echo when removing venv in jjb-cleanup.sh\n\nMissing \u0027echo\u0027 call causes this script to fail when it in truth\nsucceeds.\n\nChange-Id: I95d798a34442fcf3ca172b3bdd43260db8a09f3c\nSigned-off-by: Trevor Bramwell \u003ctbramwell@linuxfoundation.org\u003e\n",
      "createdOnDate": 1526597772000,
      "lastUpdatedDate": 1527788394000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["bramwelt"],
        ids["askb"],
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["agardner"]
      ],
      "comments": [
        {
          "timestamp": 1526597772000,
          "reviewer": ids["bramwelt"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1526597823000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/446/"
        },
        {
          "timestamp": 1526598014000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/446/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/446"
        },
        {
          "timestamp": 1526598187000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1526599486000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review+1\n\n(1 comment)\n\nHrmm... how did I miss that in my initial review?"
        },
        {
          "timestamp": 1526600161000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1526662878000,
          "reviewer": ids["bramwelt"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1526662974000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1526663099000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/447/"
        },
        {
          "timestamp": 1526663290000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/447/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/447"
        },
        {
          "timestamp": 1526664333000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1526665050000,
          "reviewer": ids["bramwelt"],
          "message": "Change has been successfully merged by Trevor Bramwell"
        },
        {
          "timestamp": 1527788394000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+2"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "fb4c5d5aef5a57f5aad163d00ae912f7b5627732",
          "parents": [
            "1c748f633fba763bdb98cdc337f29b35b8b81e5e"
          ],
          "ref": "refs/changes/17/10717/1",
          "uploader": ids["bramwelt"],
          "createdOnDate": 1526597772000,
          "author": ids["bramwelt"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1526599486000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1526598014000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/jjb-cleanup.sh",
              "line": 23,
              "reviewer": ids["askb"],
              "message": "we should also `unset JJB_VENV`?",
              "patchSetTimestamp": 1526597772000
            },
            {
              "file": "shell/jjb-cleanup.sh",
              "line": 23,
              "reviewer": ids["agrimberg"],
              "message": "I don\u0027t think that\u0027s needed since it\u0027s only going to be local to the build step given how the jobs are defined",
              "patchSetTimestamp": 1526597772000
            },
            {
              "file": "shell/jjb-cleanup.sh",
              "line": 23,
              "reviewer": ids["askb"],
              "message": "Its because Jenkins/JJB treat the entire builder section as a single script when you push a job. Now that whole builder section is referenced as a single shell script, exported var from the previous script in the list could override the value in the next script, maybe unintended.",
              "patchSetTimestamp": 1526597772000
            },
            {
              "file": "shell/jjb-cleanup.sh",
              "line": 23,
              "reviewer": ids["bramwelt"],
              "message": "I agree with Andy here that\u0027s it\u0027s not necessarily needed. But it can\u0027t hurt to add it and ensure we\u0027re cleaning up after ourselves.",
              "patchSetTimestamp": 1526597772000
            }
          ],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "9b240453b91f3c4b0844ea1c593721a1c421caa2",
          "parents": [
            "1c748f633fba763bdb98cdc337f29b35b8b81e5e"
          ],
          "ref": "refs/changes/17/10717/2",
          "uploader": ids["bramwelt"],
          "createdOnDate": 1526662878000,
          "author": ids["bramwelt"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1527788394000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1526664333000,
              "grantedBy": ids["agardner"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1526665050000,
              "grantedBy": ids["bramwelt"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1526663290000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I38aaf2ff3d655d44e757c863f83a0b2cb811ab41",
      "commitNumber": 10460,
      "subject": "Bug Fix: Replace -type f with -xtype f",
      "owner": ids["mardim"],
      "url": "https://gerrit.linuxfoundation.org/infra/10460",
      "commitMessage": "Bug Fix: Replace -type f with -xtype f\n\nThe -type f parameter cannot recognize symbolic link files\nso the replacement with the -xtype f parameter solve this problem\n\nhttps://jira.opendaylight.org/browse/INTPAK-162\n\nChange-Id: I38aaf2ff3d655d44e757c863f83a0b2cb811ab41\nSigned-off-by: Dimitrios Markou \u003cmardim@intracom-telecom.com\u003e\nSigned-off-by: Anil Belur \u003cabelur@linuxfoundation.org\u003e\n",
      "createdOnDate": 1525524127000,
      "lastUpdatedDate": 1525565219000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["agardner"],
        ids["askb"],
        ids["jwagantall"],
        ids["lf-jenkins"],
        ids["dfarrell07"],
        ids["jluhrsen"]
      ],
      "comments": [
        {
          "timestamp": 1525524127000,
          "reviewer": ids["mardim"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1525524366000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/420/"
        },
        {
          "timestamp": 1525524541000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/420/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/420"
        },
        {
          "timestamp": 1525562250000,
          "reviewer": ids["jluhrsen"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1525564031000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1525564201000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1525564299000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 2: Commit message was updated."
        },
        {
          "timestamp": 1525564503000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/421/"
        },
        {
          "timestamp": 1525564683000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/421/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/421"
        },
        {
          "timestamp": 1525565216000,
          "reviewer": ids["askb"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1525565219000,
          "reviewer": ids["askb"],
          "message": "Change has been successfully merged by Anil Belur"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "4b7b95d316c0711208add009eb3061d49af44f13",
          "parents": [
            "c3150dcea8069e284ec52bf487541576a62687ab"
          ],
          "ref": "refs/changes/60/10460/1",
          "uploader": ids["mardim"],
          "createdOnDate": 1525524127000,
          "author": ids["mardim"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1525564201000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1525524541000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1525562250000,
              "grantedBy": ids["jluhrsen"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 12,
              "reviewer": ids["askb"],
              "message": "minor nit, we link ODL jira in the same way instead we should use the full link.",
              "patchSetTimestamp": 1525524127000
            }
          ],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "d3cac52899668bc9b7f1fe7fcf16203bcf86ce53",
          "parents": [
            "c3150dcea8069e284ec52bf487541576a62687ab"
          ],
          "ref": "refs/changes/60/10460/2",
          "uploader": ids["askb"],
          "createdOnDate": 1525564299000,
          "author": ids["mardim"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1525565216000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1525565219000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1525564683000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I4d269a4dad6ddbd509a134306b61b2214194b479",
      "commitNumber": 9878,
      "subject": "Add generic push changes to gerrit builder",
      "owner": ids["askb"],
      "url": "https://gerrit.linuxfoundation.org/infra/9878",
      "commitMessage": "Add generic push changes to gerrit builder\n\nThis is a generic version of the script to push a change through\na job to Gerrit in an automated fashion. Projects can reuse this\nmacros when they have jobs which requires to  push a change to\ngerrit.\n\nRELENG-769\nChange-Id: I4d269a4dad6ddbd509a134306b61b2214194b479\nSigned-off-by: Anil Belur \u003cabelur@linuxfoundation.org\u003e\n",
      "createdOnDate": 1523327950000,
      "lastUpdatedDate": 1525385595000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["jluhrsen"],
        ids["agrimberg"],
        ids["askb"],
        ids["jwagantall"],
        ids["agardner"],
        ids["bramwelt"],
        ids["shague"]
      ],
      "comments": [
        {
          "timestamp": 1523327950000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1523328028000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/320/"
        },
        {
          "timestamp": 1523328328000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/320/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/320"
        },
        {
          "timestamp": 1523328669000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 2: Commit message was updated."
        },
        {
          "timestamp": 1523328972000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/321/"
        },
        {
          "timestamp": 1523329218000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/321/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/321"
        },
        {
          "timestamp": 1523330881000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1523331073000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/322/"
        },
        {
          "timestamp": 1523331363000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/322/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/322"
        },
        {
          "timestamp": 1523374674000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 3: Code-Review-1\n\n(3 comments)\n\nThis incorrectly assumes Jenkins is talking with Gerrit as a particular user name structure"
        },
        {
          "timestamp": 1523403632000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1523403685000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1523403815000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/326/"
        },
        {
          "timestamp": 1523404058000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/326/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/326"
        },
        {
          "timestamp": 1523404386000,
          "reviewer": ids["askb"],
          "message": "Patch Set 5:\n\n(1 comment)"
        },
        {
          "timestamp": 1523404427000,
          "reviewer": ids["askb"],
          "message": "Patch Set 3:\n\n(2 comments)"
        },
        {
          "timestamp": 1523406069000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 6."
        },
        {
          "timestamp": 1523406261000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/327/"
        },
        {
          "timestamp": 1523406538000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/327/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/327"
        },
        {
          "timestamp": 1523493378000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 6:\n\n(1 comment)"
        },
        {
          "timestamp": 1523493762000,
          "reviewer": ids["jluhrsen"],
          "message": "Patch Set 6:\n\n(2 comments)"
        },
        {
          "timestamp": 1523495406000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 7."
        },
        {
          "timestamp": 1523495468000,
          "reviewer": ids["askb"],
          "message": "Patch Set 7:\n\n(3 comments)"
        },
        {
          "timestamp": 1523495622000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/338/"
        },
        {
          "timestamp": 1523495830000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/338/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/338"
        },
        {
          "timestamp": 1523556389000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 7: Code-Review+1"
        },
        {
          "timestamp": 1523575550000,
          "reviewer": ids["jluhrsen"],
          "message": "Patch Set 7: Code-Review+1"
        },
        {
          "timestamp": 1523576568000,
          "reviewer": ids["shague"],
          "message": "Patch Set 7: Code-Review+1"
        },
        {
          "timestamp": 1523577359000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7: Code-Review-1\n\n(5 comments)"
        },
        {
          "timestamp": 1523578055000,
          "reviewer": ids["askb"],
          "message": "Patch Set 7:\n\n(5 comments)"
        },
        {
          "timestamp": 1523578803000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 8."
        },
        {
          "timestamp": 1523578812000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/342/"
        },
        {
          "timestamp": 1523579055000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/342/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/342"
        },
        {
          "timestamp": 1523581663000,
          "reviewer": ids["askb"],
          "message": "Patch Set 8:\n\n(1 comment)"
        },
        {
          "timestamp": 1523979403000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 8: Code-Review-1\n\n(1 comment)\n\nMinor whitespace cleanup. Other than that I think this is ready"
        },
        {
          "timestamp": 1523980180000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7:\n\n(1 comment)"
        },
        {
          "timestamp": 1523980287000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7:\n\n(1 comment)"
        },
        {
          "timestamp": 1524001651000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 9."
        },
        {
          "timestamp": 1524001759000,
          "reviewer": ids["askb"],
          "message": "Patch Set 9:\n\n(1 comment)"
        },
        {
          "timestamp": 1524001836000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/353/"
        },
        {
          "timestamp": 1524002111000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/353/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/353"
        },
        {
          "timestamp": 1524002288000,
          "reviewer": ids["askb"],
          "message": "Patch Set 9: Code-Review+1"
        },
        {
          "timestamp": 1524188959000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 9: Code-Review+1"
        },
        {
          "timestamp": 1524239413000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 9: Code-Review-1\n\n(4 comments)"
        },
        {
          "timestamp": 1524272838000,
          "reviewer": ids["askb"],
          "message": "Patch Set 9:\n\n(4 comments)"
        },
        {
          "timestamp": 1524272923000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 10."
        },
        {
          "timestamp": 1524272982000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/383/"
        },
        {
          "timestamp": 1524273142000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/383/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/383"
        },
        {
          "timestamp": 1524506176000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 10: Code-Review+1"
        },
        {
          "timestamp": 1524523257000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 10: Code-Review+2"
        },
        {
          "timestamp": 1524523258000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        },
        {
          "timestamp": 1525385515000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 10:\n\nMissed this during code review. We should add documentation on how to use this macro to RTD.\n\nhttps://raw.githubusercontent.com/lfit/releng-global-jjb/master/docs/jjb/lf-macros.rst"
        },
        {
          "timestamp": 1525385595000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 10:\n\n\u003e Missed this during code review. We should add documentation on how\n \u003e to use this macro to RTD.\n \u003e \n \u003e https://raw.githubusercontent.com/lfit/releng-global-jjb/master/docs/jjb/lf-macros.rst\n\nRaised a Jira to track this:\nhttps://jira.linuxfoundation.org/browse/RELENG-945"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "e30be8c9a4efb2e9d1f1aa827363718ea6b76590",
          "parents": [
            "7523625d22342839f99c02c0400a4b5d17252671"
          ],
          "ref": "refs/changes/78/9878/1",
          "uploader": ids["askb"],
          "createdOnDate": 1523327950000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1523328328000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 93,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "fc9f6b50fe76c9911cc81f4a0077ed4453115e56",
          "parents": [
            "7523625d22342839f99c02c0400a4b5d17252671"
          ],
          "ref": "refs/changes/78/9878/2",
          "uploader": ids["askb"],
          "createdOnDate": 1523328669000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1523329218000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 93,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "d50e0032ccef8f1761bc6f6b8f5bc599540ed5d8",
          "parents": [
            "7523625d22342839f99c02c0400a4b5d17252671"
          ],
          "ref": "refs/changes/78/9878/3",
          "uploader": ids["askb"],
          "createdOnDate": 1523330881000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1523374674000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1523331363000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 59,
              "reviewer": ids["agrimberg"],
              "message": "This incorrectly assumes that any system that is using this script is communicating with Gerrit as a jenkins-$SILO user. Not all of the LF managed Jenkins systems do that. In many / most cases it\u0027s a proper LFID and ends up being $GLOBALPROJECT-jobbuilder\n\nAs such, this needs to be something that is passed in or a global Jenkins ENV var",
              "patchSetTimestamp": 1523330881000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 59,
              "reviewer": ids["askb"],
              "message": "makes sense, let me fix this.",
              "patchSetTimestamp": 1523330881000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 73,
              "reviewer": ids["agrimberg"],
              "message": "See above",
              "patchSetTimestamp": 1523330881000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 73,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1523330881000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 76,
              "reviewer": ids["agrimberg"],
              "message": "See above",
              "patchSetTimestamp": 1523330881000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 76,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1523330881000
            }
          ],
          "sizeInsertions": 93,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "5ddb1281146539233769aa734934edddf5af36ad",
          "parents": [
            "7523625d22342839f99c02c0400a4b5d17252671"
          ],
          "ref": "refs/changes/78/9878/4",
          "uploader": ids["askb"],
          "createdOnDate": 1523403632000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 96,
          "sizeDeletions": 0
        },
        {
          "number": 5,
          "revision": "0c8c66f45e8fbb52e4cdbdc713d8dfa0ba367c3e",
          "parents": [
            "7523625d22342839f99c02c0400a4b5d17252671"
          ],
          "ref": "refs/changes/78/9878/5",
          "uploader": ids["askb"],
          "createdOnDate": 1523403685000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1523404058000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 96,
          "sizeDeletions": 0
        },
        {
          "number": 6,
          "revision": "cd869f23a890acf53216671284d8e2ff79e3e8df",
          "parents": [
            "7523625d22342839f99c02c0400a4b5d17252671"
          ],
          "ref": "refs/changes/78/9878/6",
          "uploader": ids["askb"],
          "createdOnDate": 1523406069000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1523406538000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 4,
              "reviewer": ids["jwagantall"],
              "message": "2018?",
              "patchSetTimestamp": 1523406069000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 4,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1523406069000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 19,
              "reviewer": ids["jluhrsen"],
              "message": "no \u0027s\u0027",
              "patchSetTimestamp": 1523406069000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 19,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1523406069000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 34,
              "reviewer": ids["jluhrsen"],
              "message": "I use --reviewers locally and I have to pass as a space\nseparated list. is it different here somehow?",
              "patchSetTimestamp": 1523406069000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 34,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1523406069000
            }
          ],
          "sizeInsertions": 93,
          "sizeDeletions": 0
        },
        {
          "number": 7,
          "revision": "c9ef2bc42f9dad808bf9e19b7b1e792a7555b64d",
          "parents": [
            "d0059ff8d3d0db756b6aa6dc07a421bfd5e29247"
          ],
          "ref": "refs/changes/78/9878/7",
          "uploader": ids["askb"],
          "createdOnDate": 1523495406000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1523577359000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1523556389000,
              "grantedBy": ids["agardner"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1523576568000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1523495830000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1523575550000,
              "grantedBy": ids["jluhrsen"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-macros.yaml",
              "line": 99,
              "reviewer": ids["zxiiro"],
              "message": "See comment in the script, the single quotes being passed here are the cause of the leading / trailing quotes. If we don\u0027t pass them here then I think we can simplify the script?",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "jjb/lf-macros.yaml",
              "line": 99,
              "reviewer": ids["askb"],
              "message": "The projects which consume this builder would be most likely use quotes especially for things like Gerrit commit message.",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 12,
              "reviewer": ids["zxiiro"],
              "message": "Instead of starting with \"This script\" since it is assumed it is better to save space and just get straight to the point. Something like:\n\n Push a change to Gerrit if files modified in repo",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 12,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 15,
              "reviewer": ids["zxiiro"],
              "message": "Latest version is always changing. It\u0027s better to be specific and say what the minimum version that introduced the --reviewers option was so that it\u0027s clear which version you need to install if you\u0027re failing.\n\nLooks like that option was added by this commit:\n\nhttps://github.com/openstack-infra/git-review/commit/d1266ee0a5a14d8c7788337785c097a1201fa5ec\n\nWhich made it into version 1.25.0 as far as I can tell:\n\nhttps://github.com/openstack-infra/git-review/commits/1.25.0",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 15,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 17,
              "reviewer": ids["zxiiro"],
              "message": "No need to mention CentOS or this line at all.",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 17,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 49,
              "reviewer": ids["zxiiro"],
              "message": "The reason there are leading / trailing quotes is because we passed it in inside the macro. Can we simplify this by just not passing it in first place?",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 49,
              "reviewer": ids["askb"],
              "message": "The projects which consume this builder would be tempted to pass the quotes especially for things like Gerrit commit message. I don\u0027t see a problem in having this as an additional check which filters that out if its there, rather than making an assumption that it wont be passed.",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 49,
              "reviewer": ids["askb"],
              "message": "Also if don\u0027t quote the gerrit commit message when its multiline, injecting the env variable is incorrectly interpreted.\n\n    builders:\n      - shell: !include-raw-escape: opendaylight-infra-update-image-list.sh\n      - lf-infra-push-gerrit-patch:\n          project: {project}\n          gerrit-user: jenkins-$SILO\n          gerrit-host: git.opendaylight.org\n          gerrit-topic: releng-update-cloud-image-list\n          gerrit-commit-message: |\n              \u0027Update cloud image list docs\n              testing with some extra lines\n              blah blah ... bla\u0027\n          reviewers-email: jluhrsen@redhat.com\n\nex:\n00:29:55 [EnvInject] - Injecting as environment variables the properties content \n00:29:55 blah\u003dblah ... bla\n00:29:55 testing\u003dwith some extra lines\n00:29:55 GERRIT_TOPIC\u003dreleng-update-cloud-image-list\n00:29:55 GERRIT_COMMIT_MESSAGE\u003dUpdate cloud image list docs\n00:29:55 GERRIT_USER\u003djenkins-sandbox\n00:29:55 REVIEWERS_EMAIL\u003djluhrsen@redhat.com\n00:29:55 PROJECT\u003dOrderedDict([(\u0027project\u0027, None)])\n00:29:55 GERRIT_HOST\u003dgit.opendaylight.org\n\nhttps://jenkins.opendaylight.org/sandbox/job/builder-update-image-list/15/console",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 49,
              "reviewer": ids["zxiiro"],
              "message": "gerrit-commit-message: |\n     \u0027Update cloud image list docs\n     testing with some extra lines\n     blah blah ... bla\u0027\n\nOk I see now. We are using a | character which in YAML means pass this string in as a new line separated string so when the script passes this to the command it breaks the command up to multiple lines.\n\nIt would be better to use the \u003e character for the gerrit-commit-message as in YAML that means this is a space separated string and would enter into the code as a single line.",
              "patchSetTimestamp": 1523495406000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 49,
              "reviewer": ids["zxiiro"],
              "message": "To be clear this does not need to be addressed.",
              "patchSetTimestamp": 1523495406000
            }
          ],
          "sizeInsertions": 93,
          "sizeDeletions": 0
        },
        {
          "number": 8,
          "revision": "394b03457d09a8f52260a24b3e3aec5e7f10293c",
          "parents": [
            "d0059ff8d3d0db756b6aa6dc07a421bfd5e29247"
          ],
          "ref": "refs/changes/78/9878/8",
          "uploader": ids["askb"],
          "createdOnDate": 1523578803000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1523979403000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1523579055000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 11,
              "reviewer": ids["agrimberg"],
              "message": "Extra space here",
              "patchSetTimestamp": 1523578803000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 11,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1523578803000
            }
          ],
          "sizeInsertions": 90,
          "sizeDeletions": 0
        },
        {
          "number": 9,
          "revision": "39c727c80b416ccd01981f601d0b4a48f478af67",
          "parents": [
            "d0059ff8d3d0db756b6aa6dc07a421bfd5e29247"
          ],
          "ref": "refs/changes/78/9878/9",
          "uploader": ids["askb"],
          "createdOnDate": 1524001651000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1524239413000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1524002288000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1524188959000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1524002111000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 40,
              "reviewer": ids["zxiiro"],
              "message": "Pin to pip\u003d\u003d9.0.3\n\npip 10 broke many of our scripts so we should be only pulling it in if we can confirm it actually works. Regardless we should be pinning pip versions from now on so that upstream new releases don\u0027t break us.",
              "patchSetTimestamp": 1524001651000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 40,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1524001651000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 54,
              "reviewer": ids["zxiiro"],
              "message": "Do we need to disable this? According to https://github.com/koalaman/shellcheck/wiki/SC1083 it\u0027s about curly braces which I don\u0027t see being used here at all.",
              "patchSetTimestamp": 1524001651000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 54,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1524001651000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 60,
              "reviewer": ids["zxiiro"],
              "message": "Our best practices doc says to not escape using double curly braces. Instead use !include-raw-escape.\n\nhttp://global-jjb.releng.linuxfoundation.org/en/latest/best-practices.html#passing-parameters-to-shell-scripts",
              "patchSetTimestamp": 1524001651000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 60,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1524001651000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 76,
              "reviewer": ids["zxiiro"],
              "message": "Do we need to disable this? According to https://github.com/koalaman/shellcheck/wiki/SC1083 it\u0027s about curly braces which I don\u0027t see being used here at all.",
              "patchSetTimestamp": 1524001651000
            },
            {
              "file": "shell/gerrit-push-patch.sh",
              "line": 76,
              "reviewer": ids["askb"],
              "message": "Done",
              "patchSetTimestamp": 1524001651000
            }
          ],
          "sizeInsertions": 90,
          "sizeDeletions": 0
        },
        {
          "number": 10,
          "revision": "cfc34325599e8540be6de457b5f07ac9e08196b4",
          "parents": [
            "d0059ff8d3d0db756b6aa6dc07a421bfd5e29247"
          ],
          "ref": "refs/changes/78/9878/10",
          "uploader": ids["askb"],
          "createdOnDate": 1524272923000,
          "author": ids["askb"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1524523257000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1524523258000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1524506176000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1524273142000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 88,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I04020587acfb8b6550c0221ebfb97a501f46b15a",
      "commitNumber": 9387,
      "subject": "Support PostBuildScript 2.x",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/9387",
      "commitMessage": "Support PostBuildScript 2.x\n\nThis is a breaking change that requires consumers of global-jjb\nto switch to JJB 2.0.3 and install PostBuildScript 2.x in Jenkins.\n\nIt updates lf-infra-publish macro to switch to the PostBuildScript 2.x\nYAML definitions.\n\nIssue: RELENG-832\nChange-Id: I04020587acfb8b6550c0221ebfb97a501f46b15a\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1520819425000,
      "lastUpdatedDate": 1521481066000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["ryjones"],
        ids["zxiiro"],
        ids["agardner"],
        ids["bramwelt"],
        ids["askb"],
        ids["jwagantall"],
        ids["jeremyphelps"],
        ids["lf-jenkins"],
        ids["cl778h"],
        ids["fdegir"]
      ],
      "comments": [
        {
          "timestamp": 1520819425000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1520819460000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-2\n\nTargetting this for global-jjb v0.18.0 so blocking this change until v0.17.0 is released first."
        },
        {
          "timestamp": 1520819910000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/284/"
        },
        {
          "timestamp": 1520820094000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/284/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/284/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/284"
        },
        {
          "timestamp": 1520867783000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2: Patch Set 1 was rebased."
        },
        {
          "timestamp": 1520867810000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: -Code-Review"
        },
        {
          "timestamp": 1520867842000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/286/"
        },
        {
          "timestamp": 1520868025000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/286/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/286/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/286"
        },
        {
          "timestamp": 1520868067000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\nThis is gonna fail until we bump the tox verify job to JJB 2.0.3."
        },
        {
          "timestamp": 1520868148000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1520868180000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1520868320000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1520868330000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/288/"
        },
        {
          "timestamp": 1520868572000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/288/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/288"
        },
        {
          "timestamp": 1520868953000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 3: Code-Review+1\n\nI believe this is accurate, but I\u0027ll let another set of eyes say yes for now."
        },
        {
          "timestamp": 1520870230000,
          "reviewer": ids["ryjones"],
          "message": "Patch Set 3: Code-Review+1"
        },
        {
          "timestamp": 1520894565000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\nI am CI"
        },
        {
          "timestamp": 1520895198000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\nrecheck"
        },
        {
          "timestamp": 1520895333000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/289/"
        },
        {
          "timestamp": 1520895491000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/289/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/289"
        },
        {
          "timestamp": 1521481065000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1521481066000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "b99e1e669c933d8721ee6b4dc89ad9f849b56323",
          "parents": [
            "de2a34225d44551c358afe05403f4cb3006f50e6"
          ],
          "ref": "refs/changes/87/9387/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1520819425000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -2,
              "grantedOnDate": 1520819460000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1520820094000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 11,
          "sizeDeletions": -5
        },
        {
          "number": 2,
          "revision": "ffcafd7f457786329546f0067663fab665aa3ebd",
          "parents": [
            "e384cae5689bc7e94628bac67cd7099aa2235710"
          ],
          "ref": "refs/changes/87/9387/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1520867783000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1520868025000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-macros.yaml",
              "line": 395,
              "reviewer": ids["agrimberg"],
              "message": "This is a deviation from what we\u0027ve been doing previously. So, we\u0027re going to mark as UNSTABLE now instead of FAILED if the postbuildscript fails?",
              "patchSetTimestamp": 1520867783000
            },
            {
              "file": "jjb/lf-macros.yaml",
              "line": 395,
              "reviewer": ids["zxiiro"],
              "message": "Yes, unfortunately we have to because the new PostBuildScript plugin will fail the entire build we don\u0027t set this option. Which is worse. Previously it just ignored and did affect the build result.\n\nOn the other hand marking unstable might be a good idea to let us know something is wrong and we have to investigate. These scripts should be coded in away that allows it to pass in all of our use cases.",
              "patchSetTimestamp": 1520867783000
            }
          ],
          "sizeInsertions": 11,
          "sizeDeletions": -5
        },
        {
          "number": 3,
          "revision": "f76c82abd9ad7f86b1fdcc0b77a78edf2e87c2c5",
          "parents": [
            "e384cae5689bc7e94628bac67cd7099aa2235710"
          ],
          "ref": "refs/changes/87/9387/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1520868180000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1521481065000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1521481066000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1520870230000,
              "grantedBy": ids["ryjones"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1520895491000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 12,
          "sizeDeletions": -6
        }
      ]
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["askb"],
      "approvalData": {
        "addedAsReviewerCount": 3,
        "approvalCount": 2,
        "commentCount": 5,
        "approvals": {
          "1": 2
        }
      }
    },
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 5,
        "approvalCount": 2,
        "commentCount": 0,
        "approvals": {
          "2": 2
        }
      }
    },
    {
      "identity": ids["bramwelt"],
      "approvalData": {
        "addedAsReviewerCount": 3,
        "approvalCount": 2,
        "commentCount": 0,
        "approvals": {
          "2": 2
        }
      }
    },
    {
      "identity": ids["jwagantall"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 1,
        "approvals": {}
      }
    },
    {
      "identity": ids["valderrv"],
      "approvalData": {
        "addedAsReviewerCount": 2,
        "approvalCount": 2,
        "commentCount": 2,
        "approvals": {
          "-1": 1,
          "1": 1
        }
      }
    },
    {
      "identity": ids["mardim"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    }
  ],
  "commentsWritten": [
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "Id7ddb55c34a741d92b1e126f1237fb9753a4aa75",
        "commitNumber": 10924,
        "subject": "Add INFO.yaml verify jobs",
        "owner": ids["jwagantall"],
        "url": "https://gerrit.linuxfoundation.org/infra/10924",
        "commitMessage": "Add INFO.yaml verify jobs\n\nAdd \u0027{project-name}-info-yaml-jobs\u0027 and\n\u0027{project-name}-github-info-yaml-jobs\u0027 to validate that\nINFO.yaml file changes are kept isolated from other file\nchanges.\n\nThe addition of or changes to an INFO.yaml should be kept\non its own gerrit change and should not be combined with other\nchanges.\n\nIssue: RELENG-973\nChange-Id: Id7ddb55c34a741d92b1e126f1237fb9753a4aa75\nSigned-off-by: Jessica Wagantall \u003cjwagantall@linuxfoundation.org\u003e\nCo-Authored-By: Trevor Bramwell \u003ctbramwell@linuxfoundation.org\u003e\n",
        "createdOnDate": 1527822426000,
        "lastUpdatedDate": 1529698399000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["lf-jenkins"],
          ids["jwagantall"],
          ids["bramwelt"],
          ids["agrimberg"],
          ids["zxiiro"],
          ids["agardner"]
        ],
        "comments": [
          {
            "timestamp": 1527822426000,
            "reviewer": ids["jwagantall"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1527822467000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/465/ (1/2)"
          },
          {
            "timestamp": 1527822512000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/173/ (2/2)"
          },
          {
            "timestamp": 1527822546000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 2: Published edit on patch set 1."
          },
          {
            "timestamp": 1527822552000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 2:\n\n(1 comment)"
          },
          {
            "timestamp": 1527822567000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/465/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/465/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/465\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/173/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/173/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/173"
          },
          {
            "timestamp": 1527822612000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/466/ (1/2)"
          },
          {
            "timestamp": 1527822647000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/174/ (2/2)"
          },
          {
            "timestamp": 1527822821000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/174/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/174/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/174\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/466/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/466"
          },
          {
            "timestamp": 1527872170000,
            "reviewer": ids["bramwelt"],
            "message": "Uploaded patch set 3."
          },
          {
            "timestamp": 1527872223000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/471/ (1/2)"
          },
          {
            "timestamp": 1527872310000,
            "reviewer": ids["bramwelt"],
            "message": "Patch Set 3:\n\nHey Jessica, since we\u0027re starting on INFO.yaml validation I wanted to include the work I started in OPNFV (but haven\u0027t merged yet) to verify the schema as well.\n\nSome of these files are Apache v2.0, which I believe we could relicense if needed as I\u0027m the original author.\n\nThanks for starting this, and I hope you don\u0027t take offense to me hijacking your patch! :)"
          },
          {
            "timestamp": 1527872312000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/179/ (2/2)"
          },
          {
            "timestamp": 1527872374000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/471/ : FAILURE\n\nFile shell/info-file-schema.yaml is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/471/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/471\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/179/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/179/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/179"
          },
          {
            "timestamp": 1527872390000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 3:\n\nNot at all!\nThanks so much for joining forces here Trevor!\nI appreciate it!\n\nLet me review your changes"
          },
          {
            "timestamp": 1527872397000,
            "reviewer": ids["bramwelt"],
            "message": "Patch Set 3:\n\nWork still need to be done to allow the job to run the verify script, which may require a separate clone?"
          },
          {
            "timestamp": 1527873874000,
            "reviewer": ids["bramwelt"],
            "message": "Uploaded patch set 4: Commit message was updated."
          },
          {
            "timestamp": 1527873969000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/475/ (1/2)"
          },
          {
            "timestamp": 1527873994000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/182/ (2/2)"
          },
          {
            "timestamp": 1527874191000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/475/ : FAILURE\n\nFile shell/info-file-schema.yaml is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/475/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/475\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/182/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/182/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/182"
          },
          {
            "timestamp": 1527874248000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 5: Published edit on patch set 4."
          },
          {
            "timestamp": 1527874349000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/476/ (1/2)"
          },
          {
            "timestamp": 1527874374000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/183/ (2/2)"
          },
          {
            "timestamp": 1527874568000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/476/ : FAILURE\n\nFile shell/info-file-schema.yaml is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/476/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/476\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/183/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/183"
          },
          {
            "timestamp": 1527874795000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 6: Published edit on patch set 5."
          },
          {
            "timestamp": 1527874804000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/477/ (1/2)"
          },
          {
            "timestamp": 1527874865000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/184/ (2/2)"
          },
          {
            "timestamp": 1527875025000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 6: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/477/ : FAILURE\n\nFile shell/info-file-schema.yaml is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/477/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/477\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/184/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/184"
          },
          {
            "timestamp": 1527877582000,
            "reviewer": ids["agrimberg"],
            "message": "Patch Set 6: Code-Review-1\n\n(5 comments)"
          },
          {
            "timestamp": 1527891035000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 7: Published edit on patch set 6."
          },
          {
            "timestamp": 1527891063000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 6:\n\n(5 comments)"
          },
          {
            "timestamp": 1527891095000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/478/ (1/2)"
          },
          {
            "timestamp": 1527891120000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/185/ (2/2)"
          },
          {
            "timestamp": 1527891267000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 7: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/478/ : FAILURE\n\nFile shell/info-file-schema.yaml is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/478/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/478\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/185/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/185"
          },
          {
            "timestamp": 1528153283000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 8: Patch Set 7 was rebased"
          },
          {
            "timestamp": 1528153373000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/494/ (1/3)"
          },
          {
            "timestamp": 1528153423000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/195/ (2/3)"
          },
          {
            "timestamp": 1528153463000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-common-packer-rtd-verify-any/5/ (3/3)"
          },
          {
            "timestamp": 1528153550000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 8: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/494/ : FAILURE\n\nFile shell/info-file-schema.yaml is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/494/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/494\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/195/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/195\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-common-packer-rtd-verify-any/5/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-common-packer-rtd-verify-any/5"
          },
          {
            "timestamp": 1528483764000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 9: Patch Set 8 was rebased"
          },
          {
            "timestamp": 1528483878000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/523/ (1/3)"
          },
          {
            "timestamp": 1528483913000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/215/ (2/3)"
          },
          {
            "timestamp": 1528483918000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-common-packer-rtd-verify-any/60/ (3/3)"
          },
          {
            "timestamp": 1528484084000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 9: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/523/ : FAILURE\n\nFile shell/info-file-schema.yaml is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/523/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/523\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/215/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/215\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-common-packer-rtd-verify-any/60/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-common-packer-rtd-verify-any/60"
          },
          {
            "timestamp": 1528557894000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 9: Code-Review-1\n\n(11 comments)\n\nWere these files written by LF staff? if so perhaps we can relicense to EPL-1.0?"
          },
          {
            "timestamp": 1528780343000,
            "reviewer": ids["jwagantall"],
            "message": "Uploaded patch set 10."
          },
          {
            "timestamp": 1528780360000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 10:\n\n(10 comments)"
          },
          {
            "timestamp": 1528780416000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 10:\n\nTrevor, can we change the license of your files to EPL-1.0?\n\nThanks!\nJess"
          },
          {
            "timestamp": 1528780425000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/543/ (1/2)"
          },
          {
            "timestamp": 1528780485000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/219/ (2/2)"
          },
          {
            "timestamp": 1528780606000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 10: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/543/ : FAILURE\n\nFile shell/info-file-schema.yaml is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/543/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/543\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/219/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/219"
          },
          {
            "timestamp": 1528818979000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 10:\n\n(1 comment)\n\nStill an open question: Were these files written by LF staff? if so perhaps we can relicense to EPL-1.0?"
          },
          {
            "timestamp": 1528834346000,
            "reviewer": ids["bramwelt"],
            "message": "Uploaded patch set 11."
          },
          {
            "timestamp": 1528834500000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 11:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/546/ (1/2)"
          },
          {
            "timestamp": 1528834776000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 11:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/221/ (2/2)"
          },
          {
            "timestamp": 1528834858000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 11: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/546/ : FAILURE\n\nFile shell/info-yaml-requirements.txt is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/546/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/546\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/221/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/221"
          },
          {
            "timestamp": 1528835648000,
            "reviewer": ids["bramwelt"],
            "message": "Patch Set 11: Code-Review-1\n\n(3 comments)\n\nI\u0027ve relicensed the files.\n\nOne thing I\u0027d like to note about this change is that we may be imposing a defacto-standard on projects they did not agree to. I think it\u0027s fine to move this forward with the caveat that we start bringing in project in to comment on the format of the INFO.yaml file, and include some disclaimer that the format is still open for discussion.\n\nGiven this schema came out of OPNFV, and meets OPNFV needs, I think its reasonable to assume not all projects will/may have the same needs in what they need to track or list here."
          },
          {
            "timestamp": 1528848195000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 12: Published edit on patch set 11."
          },
          {
            "timestamp": 1528848213000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 12:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/547/ (1/2)"
          },
          {
            "timestamp": 1528848241000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 12:\n\n(3 comments)"
          },
          {
            "timestamp": 1528848279000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 12:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/222/ (2/2)"
          },
          {
            "timestamp": 1528848351000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 12: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/547/ : FAILURE\n\nFile shell/info-yaml-requirements.txt is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/547/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/547\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/222/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/222"
          },
          {
            "timestamp": 1528850215000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 13: Published edit on patch set 12."
          },
          {
            "timestamp": 1528850350000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 13:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/548/ (1/2)"
          },
          {
            "timestamp": 1528850395000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 13:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/223/ (2/2)"
          },
          {
            "timestamp": 1528850567000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 13: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/548/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/548\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/223/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/223"
          },
          {
            "timestamp": 1528850738000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 14: Published edit on patch set 13."
          },
          {
            "timestamp": 1528850846000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 14:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/549/ (1/2)"
          },
          {
            "timestamp": 1528850891000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 14:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/224/ (2/2)"
          },
          {
            "timestamp": 1528850977000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 14: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/549/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/549\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/224/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/224"
          },
          {
            "timestamp": 1528852632000,
            "reviewer": ids["jwagantall"],
            "message": "Uploaded patch set 15."
          },
          {
            "timestamp": 1528852746000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 15:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/550/ (1/2)"
          },
          {
            "timestamp": 1528852786000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 15:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/225/ (2/2)"
          },
          {
            "timestamp": 1528852878000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 15: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/225/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/225/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/225\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/550/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/550"
          },
          {
            "timestamp": 1528859784000,
            "reviewer": ids["jwagantall"],
            "message": "Uploaded patch set 16."
          },
          {
            "timestamp": 1528861217000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 16:\n\nrecheck"
          },
          {
            "timestamp": 1528861343000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 15: Verified+1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/550/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/550"
          },
          {
            "timestamp": 1528861422000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 16:\n\nrecheck"
          },
          {
            "timestamp": 1528899608000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 16:\n\nrecheck"
          },
          {
            "timestamp": 1528899636000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 16:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/551/ (1/2)"
          },
          {
            "timestamp": 1528899678000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 16:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/226/ (2/2)"
          },
          {
            "timestamp": 1528899794000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 16: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/551/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/551\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/226/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/226"
          },
          {
            "timestamp": 1528900649000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 16: Code-Review-1\n\n(7 comments)"
          },
          {
            "timestamp": 1528913186000,
            "reviewer": ids["jwagantall"],
            "message": "Uploaded patch set 17."
          },
          {
            "timestamp": 1528913194000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 16:\n\n(7 comments)"
          },
          {
            "timestamp": 1528913346000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 17:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/554/ (1/2)"
          },
          {
            "timestamp": 1528913539000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 17:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/227/ (2/2)"
          },
          {
            "timestamp": 1528913621000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 17: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/554/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/554\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/227/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/227"
          },
          {
            "timestamp": 1528919473000,
            "reviewer": ids["bramwelt"],
            "message": "Patch Set 17: Code-Review-1\n\n(3 comments)\n\n-1 as this won\u0027t work as-is"
          },
          {
            "timestamp": 1528919594000,
            "reviewer": ids["bramwelt"],
            "message": "Patch Set 17:\n\n(1 comment)"
          },
          {
            "timestamp": 1528927850000,
            "reviewer": ids["jwagantall"],
            "message": "Uploaded patch set 18."
          },
          {
            "timestamp": 1528927965000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 18:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/557/ (1/2)"
          },
          {
            "timestamp": 1528928005000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 18:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/229/ (2/2)"
          },
          {
            "timestamp": 1528928101000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 18: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/557/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/557\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/229/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/229"
          },
          {
            "timestamp": 1528928206000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 17:\n\n(4 comments)"
          },
          {
            "timestamp": 1528928559000,
            "reviewer": ids["jwagantall"],
            "message": "Uploaded patch set 19."
          },
          {
            "timestamp": 1528928677000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 19:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/558/ (1/2)"
          },
          {
            "timestamp": 1528928715000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 19:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/230/ (2/2)"
          },
          {
            "timestamp": 1528928835000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 19: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/558/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/558\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/230/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/230"
          },
          {
            "timestamp": 1528931829000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 20: Patch Set 19 was rebased"
          },
          {
            "timestamp": 1528932039000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 20:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/560/ (1/2)"
          },
          {
            "timestamp": 1528932089000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 20:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/232/ (2/2)"
          },
          {
            "timestamp": 1528932208000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 20: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/560/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/560\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/232/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/232"
          },
          {
            "timestamp": 1528932424000,
            "reviewer": ids["jwagantall"],
            "message": "Uploaded patch set 21."
          },
          {
            "timestamp": 1528932541000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 21:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/561/ (1/2)"
          },
          {
            "timestamp": 1528932588000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 21:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/233/ (2/2)"
          },
          {
            "timestamp": 1528932737000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 21: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/561/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/561\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/233/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/233"
          },
          {
            "timestamp": 1528940575000,
            "reviewer": ids["jwagantall"],
            "message": "Uploaded patch set 22."
          },
          {
            "timestamp": 1528940705000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 22:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/562/ (1/2)"
          },
          {
            "timestamp": 1528940725000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 22:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/234/ (2/2)"
          },
          {
            "timestamp": 1528940745000,
            "reviewer": ids["jwagantall"],
            "message": "Uploaded patch set 23."
          },
          {
            "timestamp": 1528940759000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 22: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/562/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/562/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/562\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/234/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/234/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/234"
          },
          {
            "timestamp": 1528940927000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 23:\n\n(2 comments)"
          },
          {
            "timestamp": 1528940995000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 23:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/563/ (1/2)"
          },
          {
            "timestamp": 1528941057000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 23:\n\nlatest sandbox test seems like it marked an INFO.yaml file error:\nhttps://jenkins.onap.org/sandbox/job/aai-aai-data-info-yaml-verify/8/console"
          },
          {
            "timestamp": 1528941154000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 23:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/235/ (2/2)"
          },
          {
            "timestamp": 1528941208000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 23: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/563/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/563\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/235/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/235"
          },
          {
            "timestamp": 1529007108000,
            "reviewer": ids["bramwelt"],
            "message": "Patch Set 23: Code-Review-1\n\n(5 comments)"
          },
          {
            "timestamp": 1529008788000,
            "reviewer": ids["jwagantall"],
            "message": "Uploaded patch set 24."
          },
          {
            "timestamp": 1529008802000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 24:\n\n(5 comments)"
          },
          {
            "timestamp": 1529008846000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 24:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/565/ (1/2)"
          },
          {
            "timestamp": 1529008869000,
            "reviewer": ids["jwagantall"],
            "message": "Uploaded patch set 25."
          },
          {
            "timestamp": 1529008895000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 24: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/565/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/565/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/565"
          },
          {
            "timestamp": 1529008896000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 25:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/566/ (1/2)"
          },
          {
            "timestamp": 1529008997000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 25:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/237/ (2/2)"
          },
          {
            "timestamp": 1529009096000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 25: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/566/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/566\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/237/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/237"
          },
          {
            "timestamp": 1529010809000,
            "reviewer": ids["bramwelt"],
            "message": "Patch Set 25:\n\n(2 comments)\n\nLooks good! Just some minor last nits."
          },
          {
            "timestamp": 1529012221000,
            "reviewer": ids["jwagantall"],
            "message": "Uploaded patch set 26."
          },
          {
            "timestamp": 1529012296000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 26:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/567/ (1/2)"
          },
          {
            "timestamp": 1529012348000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 26:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/238/ (2/2)"
          },
          {
            "timestamp": 1529012457000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 26: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/567/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/567\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/238/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/238"
          },
          {
            "timestamp": 1529014998000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 26: Code-Review-1\n\n(4 comments)"
          },
          {
            "timestamp": 1529015355000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 26:\n\n(3 comments)"
          },
          {
            "timestamp": 1529015552000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 26:\n\n(2 comments)"
          },
          {
            "timestamp": 1529085791000,
            "reviewer": ids["jwagantall"],
            "message": "Uploaded patch set 27."
          },
          {
            "timestamp": 1529085799000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 26:\n\n(2 comments)"
          },
          {
            "timestamp": 1529085884000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 28: Patch Set 27 was rebased"
          },
          {
            "timestamp": 1529085915000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 28:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/572/ (1/2)"
          },
          {
            "timestamp": 1529085957000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 28:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/240/ (2/2)"
          },
          {
            "timestamp": 1529085961000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 28:\n\nDoing a final sandbox test"
          },
          {
            "timestamp": 1529086088000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 28: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/572/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/572\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/240/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/240"
          },
          {
            "timestamp": 1529086364000,
            "reviewer": ids["jwagantall"],
            "message": "Uploaded patch set 29."
          },
          {
            "timestamp": 1529086377000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 30: Patch Set 29 was rebased"
          },
          {
            "timestamp": 1529086436000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 30:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/573/ (1/2)"
          },
          {
            "timestamp": 1529086493000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 30:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/241/ (2/2)"
          },
          {
            "timestamp": 1529086530000,
            "reviewer": ids["jwagantall"],
            "message": "Uploaded patch set 31."
          },
          {
            "timestamp": 1529086544000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 30: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/573/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/573/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/573\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/241/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/241/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/241"
          },
          {
            "timestamp": 1529086601000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 31:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/574/ (1/2)"
          },
          {
            "timestamp": 1529086646000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 31:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/242/ (2/2)"
          },
          {
            "timestamp": 1529086760000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 31: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/574/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/574\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/242/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/242"
          },
          {
            "timestamp": 1529088179000,
            "reviewer": ids["bramwelt"],
            "message": "Patch Set 31: Code-Review+2"
          },
          {
            "timestamp": 1529089229000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 31: Code-Review+2"
          },
          {
            "timestamp": 1529089253000,
            "reviewer": ids["zxiiro"],
            "message": "Change has been successfully merged by Thanh Ha"
          },
          {
            "timestamp": 1529698399000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 31:\n\n(1 comment)"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "779962dfb29557f26b43430be458f61377612583",
            "parents": [
              "492598352aa58d3aace7f944ef8e7a8a2e82c8a2"
            ],
            "ref": "refs/changes/24/10924/1",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1527822426000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1527822567000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 800,
                "reviewer": ids["jwagantall"],
                "message": "Need to investigate how to make sure github job gets triggered only when an INFO.yaml change file is detected",
                "patchSetTimestamp": 1527822426000
              }
            ],
            "sizeInsertions": 195,
            "sizeDeletions": -1
          },
          {
            "number": 2,
            "revision": "cc75e41dabf16a998f3357ffff222203b3a9714b",
            "parents": [
              "492598352aa58d3aace7f944ef8e7a8a2e82c8a2"
            ],
            "ref": "refs/changes/24/10924/2",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1527822546000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1527822821000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 195,
            "sizeDeletions": -1
          },
          {
            "number": 3,
            "revision": "a0594035d1d00fb8da890fef8015a29865b1c0ae",
            "parents": [
              "492598352aa58d3aace7f944ef8e7a8a2e82c8a2"
            ],
            "ref": "refs/changes/24/10924/3",
            "uploader": ids["bramwelt"],
            "createdOnDate": 1527872170000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1527872374000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 343,
            "sizeDeletions": -1
          },
          {
            "number": 4,
            "revision": "b239c22cb8f5d1f3c327202608bcb29751919164",
            "parents": [
              "492598352aa58d3aace7f944ef8e7a8a2e82c8a2"
            ],
            "ref": "refs/changes/24/10924/4",
            "uploader": ids["bramwelt"],
            "createdOnDate": 1527873874000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "NO_CODE_CHANGE",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1527874191000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 343,
            "sizeDeletions": -1
          },
          {
            "number": 5,
            "revision": "bc434236f2918a2b4f102117c25c302b7d113502",
            "parents": [
              "492598352aa58d3aace7f944ef8e7a8a2e82c8a2"
            ],
            "ref": "refs/changes/24/10924/5",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1527874248000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1527874568000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 302,
            "sizeDeletions": -1
          },
          {
            "number": 6,
            "revision": "0a583b93d70a987c7a066f8d51c99cfe81e7f69e",
            "parents": [
              "492598352aa58d3aace7f944ef8e7a8a2e82c8a2"
            ],
            "ref": "refs/changes/24/10924/6",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1527874795000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1527877582000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1527875025000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "/COMMIT_MSG",
                "line": 9,
                "reviewer": ids["agrimberg"],
                "message": "Missing single quote here",
                "patchSetTimestamp": 1527874795000
              },
              {
                "file": "/COMMIT_MSG",
                "line": 9,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1527874795000
              },
              {
                "file": "/COMMIT_MSG",
                "line": 10,
                "reviewer": ids["agrimberg"],
                "message": "validate",
                "patchSetTimestamp": 1527874795000
              },
              {
                "file": "/COMMIT_MSG",
                "line": 10,
                "reviewer": ids["agrimberg"],
                "message": "Missing single quote here",
                "patchSetTimestamp": 1527874795000
              },
              {
                "file": "/COMMIT_MSG",
                "line": 10,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1527874795000
              },
              {
                "file": "/COMMIT_MSG",
                "line": 10,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1527874795000
              },
              {
                "file": "shell/info-file-schema.yaml",
                "line": 36,
                "reviewer": ids["agrimberg"],
                "message": "Why does it feel like this enum is missing states? ODL has projects in more states than just Incubation!",
                "patchSetTimestamp": 1527874795000
              },
              {
                "file": "shell/info-file-schema.yaml",
                "line": 36,
                "reviewer": ids["jwagantall"],
                "message": "Investigating the states. \n\nI have corrected all other comments in the meanwhile",
                "patchSetTimestamp": 1527874795000
              },
              {
                "file": "shell/info-file-schema.yaml",
                "line": 52,
                "reviewer": ids["agrimberg"],
                "message": "There no reason to have this comment here if it\u0027s not being used",
                "patchSetTimestamp": 1527874795000
              },
              {
                "file": "shell/info-file-schema.yaml",
                "line": 52,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1527874795000
              }
            ],
            "sizeInsertions": 303,
            "sizeDeletions": -1
          },
          {
            "number": 7,
            "revision": "ae17afaf7a1a7726ec9f808cf4426df75f23f001",
            "parents": [
              "492598352aa58d3aace7f944ef8e7a8a2e82c8a2"
            ],
            "ref": "refs/changes/24/10924/7",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1527891035000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1527891267000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 302,
            "sizeDeletions": -1
          },
          {
            "number": 8,
            "revision": "e7d928554c15fcff4d0d8be818038e06d72bf9f1",
            "parents": [
              "f269be13382489a33818bdbb262796b5923a4197"
            ],
            "ref": "refs/changes/24/10924/8",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1528153283000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "TRIVIAL_REBASE",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1528153550000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 302,
            "sizeDeletions": -1
          },
          {
            "number": 9,
            "revision": "1224096c5cfbfe669ca8e14aceb82011b28ee39b",
            "parents": [
              "961ef4327102f60f1d81e91b73027f032e144d6e"
            ],
            "ref": "refs/changes/24/10924/9",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1528483764000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "TRIVIAL_REBASE",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1528557894000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1528484084000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "docs/jjb/lf-ci-jobs.rst",
                "line": 35,
                "reviewer": ids["zxiiro"],
                "message": "Jobs to verify INFO.yaml file changes.",
                "patchSetTimestamp": 1528483764000
              },
              {
                "file": "docs/jjb/lf-ci-jobs.rst",
                "line": 35,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1528483764000
              },
              {
                "file": "docs/jjb/lf-ci-jobs.rst",
                "line": 41,
                "reviewer": ids["zxiiro"],
                "message": "What\u0027s different between Gerrit and GitHub that we cannot deploy this job to both?",
                "patchSetTimestamp": 1528483764000
              },
              {
                "file": "docs/jjb/lf-ci-jobs.rst",
                "line": 41,
                "reviewer": ids["jwagantall"],
                "message": "With Github I am not able to restrict the trigger of these jobs. \n\nThese jobs will be triggered for a file pattern matching \"INFO.yaml\" but I cannot specify a pattern in the Github trigger",
                "patchSetTimestamp": 1528483764000
              },
              {
                "file": "docs/jjb/lf-ci-jobs.rst",
                "line": 41,
                "reviewer": ids["zxiiro"],
                "message": "Yes you can. See my series of patches to change all that:\n\nhttps://gerrit.linuxfoundation.org/infra/#/q/topic:included-regions",
                "patchSetTimestamp": 1528483764000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 26,
                "reviewer": ids["zxiiro"],
                "message": "What\u0027s stopping us from adding it right now?",
                "patchSetTimestamp": 1528483764000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 26,
                "reviewer": ids["jwagantall"],
                "message": "See my explanation in docs/jjb/lf-ci-jobs.rst",
                "patchSetTimestamp": 1528483764000
              },
              {
                "file": "shell/info-file-validate.sh",
                "line": 9,
                "reviewer": ids["zxiiro"],
                "message": "Please echo the script name.\n\n echo \u0027--\u003e info-file-validate.sh\u0027",
                "patchSetTimestamp": 1528483764000
              },
              {
                "file": "shell/info-file-validate.sh",
                "line": 9,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1528483764000
              },
              {
                "file": "shell/info-file-validate.sh",
                "line": 10,
                "reviewer": ids["zxiiro"],
                "message": "set -eu -o pipefail\n set -x  # Enable trace",
                "patchSetTimestamp": 1528483764000
              },
              {
                "file": "shell/info-file-validate.sh",
                "line": 10,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1528483764000
              },
              {
                "file": "shell/info-file-validate.sh",
                "line": 14,
                "reviewer": ids["zxiiro"],
                "message": "Use /tmp/v to avoid https://tox.readthedocs.io/en/latest/example/jenkins.html#avoiding-the-path-too-long-error-with-long-shebang-lines\n\n\n source \"/tmp/v/info/bin/activate\"",
                "patchSetTimestamp": 1528483764000
              },
              {
                "file": "shell/info-file-validate.sh",
                "line": 14,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1528483764000
              },
              {
                "file": "shell/info-file-validate.sh",
                "line": 17,
                "reviewer": ids["zxiiro"],
                "message": "This isn\u0027t going to pass shellcheck I think. Is this a newline separated list or a space separated list?",
                "patchSetTimestamp": 1528483764000
              },
              {
                "file": "shell/info-yaml-requirements.txt",
                "line": 4,
                "reviewer": ids["zxiiro"],
                "message": "Files in global-jjb does not get passed into Jenkins. Either generate this file at runtime or the script will have to wget the file from the internet. I think generating at runtime is the easiest way.",
                "patchSetTimestamp": 1528483764000
              },
              {
                "file": "shell/info-yaml-requirements.txt",
                "line": 4,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1528483764000
              },
              {
                "file": "shell/yaml-verify-schema.py",
                "line": 24,
                "reviewer": ids["zxiiro"],
                "message": "One liner pydocs should be written as:\n\n \"\"\"Parse arguments and verify YAML\"\"\"\n\n\nMulti-line pydoc should be written as:\n\n \"\"\"This is the summary line\n \n This is the pydoc body for additional details.\n and can be as many lines as necessary.\n \"\"\"",
                "patchSetTimestamp": 1528483764000
              },
              {
                "file": "shell/yaml-verify-schema.py",
                "line": 24,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1528483764000
              },
              {
                "file": "shell/yaml-verify-schema.py",
                "line": 39,
                "reviewer": ids["zxiiro"],
                "message": "It\u0027s pretty obvious that jsonschema code below has to do with loading the schema. I don\u0027t think this comment adds any value.",
                "patchSetTimestamp": 1528483764000
              },
              {
                "file": "shell/yaml-verify-schema.py",
                "line": 39,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1528483764000
              },
              {
                "file": "shell/yaml-verify-schema.py",
                "line": 45,
                "reviewer": ids["zxiiro"],
                "message": "It\u0027s pretty obvious that the below code is about errors. I don\u0027t think this comment adds any value.",
                "patchSetTimestamp": 1528483764000
              },
              {
                "file": "shell/yaml-verify-schema.py",
                "line": 45,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1528483764000
              }
            ],
            "sizeInsertions": 302,
            "sizeDeletions": -1
          },
          {
            "number": 10,
            "revision": "f04580555df1e6e643520c1f662dfb494386c96a",
            "parents": [
              "9b240453b91f3c4b0844ea1c593721a1c421caa2"
            ],
            "ref": "refs/changes/24/10924/10",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1528780343000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1528780606000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 306,
            "sizeDeletions": -1
          },
          {
            "number": 11,
            "revision": "b3b00466b2f1e77fa571a1060c9431324bc28000",
            "parents": [
              "9b240453b91f3c4b0844ea1c593721a1c421caa2"
            ],
            "ref": "refs/changes/24/10924/11",
            "uploader": ids["bramwelt"],
            "createdOnDate": 1528834346000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1528835648000,
                "grantedBy": ids["bramwelt"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1528834858000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "shell/info-file-schema.yaml",
                "line": 30,
                "reviewer": ids["bramwelt"],
                "message": "One thing we\u0027re missing here is a version, as I assume this schema may change from time to time.",
                "patchSetTimestamp": 1528834346000
              },
              {
                "file": "shell/info-file-schema.yaml",
                "line": 30,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1528834346000
              },
              {
                "file": "shell/info-file-schema.yaml",
                "line": 35,
                "reviewer": ids["bramwelt"],
                "message": "This should be \u0027lifecycle_state\u0027",
                "patchSetTimestamp": 1528834346000
              },
              {
                "file": "shell/info-file-schema.yaml",
                "line": 35,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1528834346000
              },
              {
                "file": "shell/info-file-schema.yaml",
                "line": 52,
                "reviewer": ids["bramwelt"],
                "message": "As there is no format defined for \u0027timezone\u0027 in jsonschema, the previous comment was a note to write either a regex to validate timezones (foo/bar) or implement a validator for them.\n\nhttps://spacetelescope.github.io/understanding-json-schema/reference/string.html?highlight\u003dpattern#format",
                "patchSetTimestamp": 1528834346000
              },
              {
                "file": "shell/info-file-schema.yaml",
                "line": 52,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1528834346000
              }
            ],
            "sizeInsertions": 309,
            "sizeDeletions": -1
          },
          {
            "number": 12,
            "revision": "f363a2d0a1f81560f9e96f62b7162ca2b2c75b44",
            "parents": [
              "9b240453b91f3c4b0844ea1c593721a1c421caa2"
            ],
            "ref": "refs/changes/24/10924/12",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1528848195000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1528848351000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 311,
            "sizeDeletions": -1
          },
          {
            "number": 13,
            "revision": "e5a314cae9a5aac58b69762d3339b22bd3c9cbad",
            "parents": [
              "9b240453b91f3c4b0844ea1c593721a1c421caa2"
            ],
            "ref": "refs/changes/24/10924/13",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1528850215000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1528850567000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 308,
            "sizeDeletions": -1
          },
          {
            "number": 14,
            "revision": "03dadfed1d1c48a55b72258d16aeb4eeaf4637cf",
            "parents": [
              "9b240453b91f3c4b0844ea1c593721a1c421caa2"
            ],
            "ref": "refs/changes/24/10924/14",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1528850738000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1528850977000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 309,
            "sizeDeletions": -1
          },
          {
            "number": 15,
            "revision": "a8a42298f2015a5f246f7dc656a31276e4ffc31e",
            "parents": [
              "4d6ed41749a2e280c3ba438a55ea1e1bf92d1ce9"
            ],
            "ref": "refs/changes/24/10924/15",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1528852632000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1528861343000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 356,
            "sizeDeletions": -1
          },
          {
            "number": 16,
            "revision": "a3f4b55f15f3ff14d923a1df8ee72727221f8d7b",
            "parents": [
              "4d6ed41749a2e280c3ba438a55ea1e1bf92d1ce9"
            ],
            "ref": "refs/changes/24/10924/16",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1528859784000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1528900649000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1528899794000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 67,
                "reviewer": ids["zxiiro"],
                "message": "Since no other jobs are using this anchor and we didn\u0027t create an anchor for the github version let\u0027s move it out of this anchor and into the lf_info_yaml_verify one.",
                "patchSetTimestamp": 1528859784000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 67,
                "reviewer": ids["jwagantall"],
                "message": "Done, switched to rather use gerrit_trigger_file_paths",
                "patchSetTimestamp": 1528859784000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 70,
                "reviewer": ids["zxiiro"],
                "message": "Use REG_EXP instead.\n\nThis way we can make sure the same pattern is applied to both the github job and the Gerrit job as the GitHub one uses regex patterns.",
                "patchSetTimestamp": 1528859784000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 70,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1528859784000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 736,
                "reviewer": ids["zxiiro"],
                "message": "Add a comment above this line stating:\n\n # github_included_regions MUST match gerrit_trigger_file_paths",
                "patchSetTimestamp": 1528859784000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 736,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1528859784000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 778,
                "reviewer": ids["zxiiro"],
                "message": "If following the above advice change this to:\n\n file-paths: \u0027{obj:gerrit_trigger_file_paths}",
                "patchSetTimestamp": 1528859784000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 778,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1528859784000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 801,
                "reviewer": ids["zxiiro"],
                "message": "Please don\u0027t use this macro. I\u0027m trying to remove it. Call the `github-pullrequest` trigger directly.",
                "patchSetTimestamp": 1528859784000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 801,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1528859784000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 804,
                "reviewer": ids["zxiiro"],
                "message": "JJB?",
                "patchSetTimestamp": 1528859784000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 804,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1528859784000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 811,
                "reviewer": ids["zxiiro"],
                "message": "Refer to one of verify jobs in the included-regions patches I made for example on the github-pullrequest sections. it\u0027s not the same as the old style:\n\nhttps://gerrit.linuxfoundation.org/infra/#/c/11190/3/jjb/lf-python-jobs.yaml",
                "patchSetTimestamp": 1528859784000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 811,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1528859784000
              }
            ],
            "sizeInsertions": 356,
            "sizeDeletions": -1
          },
          {
            "number": 17,
            "revision": "d92d70b08e3396400bf1605063c1f7efb09ac4ef",
            "parents": [
              "4d6ed41749a2e280c3ba438a55ea1e1bf92d1ce9"
            ],
            "ref": "refs/changes/24/10924/17",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1528913186000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1528919473000,
                "grantedBy": ids["bramwelt"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1528913621000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "shell/info-file-schema.yaml",
                "line": 1,
                "reviewer": ids["bramwelt"],
                "message": "This file should be renamed info.schema and perhaps relocated along with the python file out of shell?",
                "patchSetTimestamp": 1528913186000
              },
              {
                "file": "shell/info-file-schema.yaml",
                "line": 1,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1528913186000
              },
              {
                "file": "shell/info-file-schema.yaml",
                "line": 12,
                "reviewer": ids["bramwelt"],
                "message": "This is still pointing at OPNFV. It should instead point at the global-jjb schema file.",
                "patchSetTimestamp": 1528913186000
              },
              {
                "file": "shell/info-file-schema.yaml",
                "line": 12,
                "reviewer": ids["jwagantall"],
                "message": "Done\n\nIs this a pointer to the same file itself? i wonder if i added it correctly.",
                "patchSetTimestamp": 1528913186000
              },
              {
                "file": "shell/info-file-validate.sh",
                "line": 23,
                "reviewer": ids["bramwelt"],
                "message": "It doesn\u0027t make sense to write these to a file to immediately install them...we can just \u0027pip install ...\u0027 these in the script.",
                "patchSetTimestamp": 1528913186000
              },
              {
                "file": "shell/info-file-validate.sh",
                "line": 23,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1528913186000
              },
              {
                "file": "shell/info-file-validate.sh",
                "line": 30,
                "reviewer": ids["bramwelt"],
                "message": "There are two ways we could go about this: 1) clone global-jjb as part of the job and cd to where these files are located and execute the script 2) wget the script and schema before executing them.\n\nI\u0027m not sure which is the better approach, though I\u0027m leaning toward git clone (as we don\u0027t have to constantly update the list of files if that changes), and we don\u0027t have to worry about whether or not wget/curl is installed and the plethora of flags they may need.",
                "patchSetTimestamp": 1528913186000
              },
              {
                "file": "shell/info-file-validate.sh",
                "line": 30,
                "reviewer": ids["jwagantall"],
                "message": "Added the instructions but need your input if this is the best way",
                "patchSetTimestamp": 1528913186000
              }
            ],
            "sizeInsertions": 350,
            "sizeDeletions": -1
          },
          {
            "number": 18,
            "revision": "56cda0367c13c16b2334c080695489c7cd44b3f7",
            "parents": [
              "4d6ed41749a2e280c3ba438a55ea1e1bf92d1ce9"
            ],
            "ref": "refs/changes/24/10924/18",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1528927850000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1528928101000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 351,
            "sizeDeletions": -1
          },
          {
            "number": 19,
            "revision": "e3e174712d9ddb3d6af8df2e43a4edbcf62d1c90",
            "parents": [
              "4d6ed41749a2e280c3ba438a55ea1e1bf92d1ce9"
            ],
            "ref": "refs/changes/24/10924/19",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1528928559000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1528928835000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 351,
            "sizeDeletions": -1
          },
          {
            "number": 20,
            "revision": "964b3948cf78cdf80c7e5f31862bf47fe05b1a79",
            "parents": [
              "e154622c6324f2b4a9db3970c074254649d5eaf3"
            ],
            "ref": "refs/changes/24/10924/20",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1528931829000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "TRIVIAL_REBASE",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1528932208000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 351,
            "sizeDeletions": -1
          },
          {
            "number": 21,
            "revision": "85f4c8dc3ec49e7a84a7f8998eeb37a1475be5df",
            "parents": [
              "e154622c6324f2b4a9db3970c074254649d5eaf3"
            ],
            "ref": "refs/changes/24/10924/21",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1528932424000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1528932737000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 351,
            "sizeDeletions": -1
          },
          {
            "number": 22,
            "revision": "d8ac5c1997126b6ba4993ea8d9cb58ecefa555c2",
            "parents": [
              "e154622c6324f2b4a9db3970c074254649d5eaf3"
            ],
            "ref": "refs/changes/24/10924/22",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1528940575000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1528940759000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 348,
            "sizeDeletions": -1
          },
          {
            "number": 23,
            "revision": "73042754bb6ff48ed96bd4b8e1dc5987571fd883",
            "parents": [
              "e154622c6324f2b4a9db3970c074254649d5eaf3"
            ],
            "ref": "refs/changes/24/10924/23",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1528940745000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1529007108000,
                "grantedBy": ids["bramwelt"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1528941208000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "docs/jjb/lf-ci-jobs.rst",
                "line": 110,
                "reviewer": ids["bramwelt"],
                "message": "Not sure this exists? I can\u0027t seem to find the macro...",
                "patchSetTimestamp": 1528940745000
              },
              {
                "file": "docs/jjb/lf-ci-jobs.rst",
                "line": 110,
                "reviewer": ids["jwagantall"],
                "message": "OH yes.. thanks! we removed it .. let me update this",
                "patchSetTimestamp": 1528940745000
              },
              {
                "file": "info-schema",
                "line": 55,
                "reviewer": ids["bramwelt"],
                "message": "This is missing \u0027_\u0027 as in \u0027Los_Angeles\u0027 and \u0027-\u0027 as in \u0027Porto-Novo\u0027\n\nI belive you can list this all as on range: [A-Za-z_-]",
                "patchSetTimestamp": 1528940745000
              },
              {
                "file": "info-schema",
                "line": 55,
                "reviewer": ids["jwagantall"],
                "message": "In ONAP we are using \"Los Angeles\" for example..  :(\n\nDo we have this standardized?",
                "patchSetTimestamp": 1528940745000
              },
              {
                "file": "info-schema",
                "line": 55,
                "reviewer": ids["bramwelt"],
                "message": "It sure is! ;) https://www.iana.org/time-zones\n\n`ls /usr/share/zoneinfo`",
                "patchSetTimestamp": 1528940745000
              },
              {
                "file": "shell/git-validate-info-yaml.sh",
                "line": 11,
                "reviewer": ids["bramwelt"],
                "message": "Missing script name.",
                "patchSetTimestamp": 1528940745000
              },
              {
                "file": "shell/git-validate-info-yaml.sh",
                "line": 11,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1528940745000
              },
              {
                "file": "shell/git-validate-info-yaml.sh",
                "line": 24,
                "reviewer": ids["bramwelt"],
                "message": "This is fine for now, but we may need to revisit it in the future as I just realized I\u0027m not sure if this will work for Github since they allow multiple commits: so HEAD~1 might refer to the previous commit in the PR, instead of there intended merge point.",
                "patchSetTimestamp": 1528940745000
              },
              {
                "file": "shell/git-validate-info-yaml.sh",
                "line": 24,
                "reviewer": ids["jwagantall"],
                "message": "Sure.. I need to check on this and how the repo looks like after \"checking out\" the patchset that we are about to review.",
                "patchSetTimestamp": 1528940745000
              },
              {
                "file": "shell/info-file-validate.sh",
                "line": 21,
                "reviewer": ids["jwagantall"],
                "message": "Cloning from Gerrit since I get a key issue (permissions denied) after trying to clone from Github (ONAP\u0027s sandbox)",
                "patchSetTimestamp": 1528940745000
              },
              {
                "file": "shell/info-file-validate.sh",
                "line": 25,
                "reviewer": ids["jwagantall"],
                "message": "Removed the loop since we are validating already that we only have one single \"INFO.yaml\" being verified in the gerrit. \n\nIf the gerrit to get verified contains changes other than just INFO.yaml, the change gets -1\u0027ed",
                "patchSetTimestamp": 1528940745000
              },
              {
                "file": "yaml-verify-schema.py",
                "line": 48,
                "reviewer": ids["bramwelt"],
                "message": "This should just say \u0027schema\u0027",
                "patchSetTimestamp": 1528940745000
              },
              {
                "file": "yaml-verify-schema.py",
                "line": 48,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1528940745000
              }
            ],
            "sizeInsertions": 345,
            "sizeDeletions": -1
          },
          {
            "number": 24,
            "revision": "5f3a20b5cf7efc6ca0c9c1adc758529bcb31d65e",
            "parents": [
              "e154622c6324f2b4a9db3970c074254649d5eaf3"
            ],
            "ref": "refs/changes/24/10924/24",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1529008788000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1529008895000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 340,
            "sizeDeletions": -1
          },
          {
            "number": 25,
            "revision": "3d057303932ed43368cac3a8f949c26fcf7ff19a",
            "parents": [
              "e154622c6324f2b4a9db3970c074254649d5eaf3"
            ],
            "ref": "refs/changes/24/10924/25",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1529008869000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1529009096000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "docs/jjb/lf-ci-jobs.rst",
                "line": 403,
                "reviewer": ids["bramwelt"],
                "message": "\"... and that INFO.yaml files follow the schema defined in `global-jjb/info-schema`\"",
                "patchSetTimestamp": 1529008869000
              },
              {
                "file": "docs/jjb/lf-ci-jobs.rst",
                "line": 403,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1529008869000
              }
            ],
            "sizeInsertions": 340,
            "sizeDeletions": 0
          },
          {
            "number": 26,
            "revision": "53faf309af02443e21bc295bec4344ab1018c28d",
            "parents": [
              "e154622c6324f2b4a9db3970c074254649d5eaf3"
            ],
            "ref": "refs/changes/24/10924/26",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1529012221000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1529014998000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1529012457000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "docs/jjb/lf-ci-jobs.rst",
                "line": 397,
                "reviewer": ids["zxiiro"],
                "message": "no need for this prefix. just info-yaml-verify is fine.",
                "patchSetTimestamp": 1529012221000
              },
              {
                "file": "docs/jjb/lf-ci-jobs.rst",
                "line": 397,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1529012221000
              },
              {
                "file": "docs/jjb/lf-ci-jobs.rst",
                "line": 430,
                "reviewer": ids["zxiiro"],
                "message": "need a doc for github_included_regions too",
                "patchSetTimestamp": 1529012221000
              },
              {
                "file": "docs/jjb/lf-ci-jobs.rst",
                "line": 430,
                "reviewer": ids["jwagantall"],
                "message": "The github_included_regions is not optional or required, but rather a parameter with a fixed value that is set to match \"INFO.yaml\". Users are not allowed to change this value since this job should only track that pattern. \n\nWill documenting it cause confusion and making people think it is an option? In which section shall I put it if so.",
                "patchSetTimestamp": 1529012221000
              },
              {
                "file": "docs/jjb/lf-ci-jobs.rst",
                "line": 430,
                "reviewer": ids["jwagantall"],
                "message": "Removed gerrit_trigger_file_paths since it is a fixed value",
                "patchSetTimestamp": 1529012221000
              },
              {
                "file": "shell/info-file-validate.sh",
                "line": 21,
                "reviewer": ids["zxiiro"],
                "message": "Use the GitHub mirror URL.",
                "patchSetTimestamp": 1529012221000
              },
              {
                "file": "shell/info-file-validate.sh",
                "line": 21,
                "reviewer": ids["jwagantall"],
                "message": "I tried, but I get this error:\n01:15:57 + git clone git@github.com:lfit/releng-global-jjb.git\n01:15:57 Cloning into \u0027releng-global-jjb\u0027...\n01:15:57 Host key verification failed.\n01:15:57 fatal: Could not read from remote repository.\n01:15:57 \n01:15:57 Please make sure you have the correct access rights\n01:15:57 and the repository exists.\n\n\nIs this just because Sandbox should not be allowed to clone from github?",
                "patchSetTimestamp": 1529012221000
              },
              {
                "file": "shell/info-file-validate.sh",
                "line": 21,
                "reviewer": ids["jwagantall"],
                "message": "Done, my bad I was using the wrong command",
                "patchSetTimestamp": 1529012221000
              },
              {
                "file": "shell/info-file-validate.sh",
                "line": 25,
                "reviewer": ids["zxiiro"],
                "message": "Continuation lines should be indented by 4 spaces.",
                "patchSetTimestamp": 1529012221000
              },
              {
                "file": "shell/info-file-validate.sh",
                "line": 25,
                "reviewer": ids["jwagantall"],
                "message": "Done",
                "patchSetTimestamp": 1529012221000
              }
            ],
            "sizeInsertions": 341,
            "sizeDeletions": 0
          },
          {
            "number": 27,
            "revision": "ac1681cbac39031bdf0eef23805ae0e5811b1b1f",
            "parents": [
              "e154622c6324f2b4a9db3970c074254649d5eaf3"
            ],
            "ref": "refs/changes/24/10924/27",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1529085791000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 331,
            "sizeDeletions": 0
          },
          {
            "number": 28,
            "revision": "ba89dc3bb1ec2bd10d6a832cfe8b7108ff5c61c8",
            "parents": [
              "27090106c7bb23ff93bda6bb9798fe3b94686124"
            ],
            "ref": "refs/changes/24/10924/28",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1529085884000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "TRIVIAL_REBASE",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1529086088000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 331,
            "sizeDeletions": 0
          },
          {
            "number": 29,
            "revision": "132246b0a5da44fa703fc411d49e60cdb3123937",
            "parents": [
              "e154622c6324f2b4a9db3970c074254649d5eaf3"
            ],
            "ref": "refs/changes/24/10924/29",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1529086364000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 333,
            "sizeDeletions": 0
          },
          {
            "number": 30,
            "revision": "583c4f1cae999377ce25f3d7ed4b46f2ece31f02",
            "parents": [
              "27090106c7bb23ff93bda6bb9798fe3b94686124"
            ],
            "ref": "refs/changes/24/10924/30",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1529086377000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "TRIVIAL_REBASE",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1529086544000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 333,
            "sizeDeletions": 0
          },
          {
            "number": 31,
            "revision": "b83660faf15e9b6983d5d6baa031ecec710140b8",
            "parents": [
              "27090106c7bb23ff93bda6bb9798fe3b94686124"
            ],
            "ref": "refs/changes/24/10924/31",
            "uploader": ids["jwagantall"],
            "createdOnDate": 1529086530000,
            "author": ids["jwagantall"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1529089229000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1529089253000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1529088179000,
                "grantedBy": ids["bramwelt"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1529086760000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "info-schema",
                "line": 16,
                "reviewer": ids["agardner"],
                "message": "We dont have this in OPNFV info.yaml files.",
                "patchSetTimestamp": 1529086530000
              }
            ],
            "sizeInsertions": 333,
            "sizeDeletions": 0
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "info-schema",
          "line": 16,
          "reviewer": ids["agardner"],
          "message": "We dont have this in OPNFV info.yaml files.",
          "patchSetTimestamp": 1529086530000
        }
      ]
    },
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "Ifdbf6c647a80e1d9e96e159a9bd7e2c097cd9400",
        "commitNumber": 10236,
        "subject": "Add pipefail",
        "owner": ids["valderrv"],
        "url": "https://gerrit.linuxfoundation.org/infra/10236",
        "commitMessage": "Add pipefail\n\nIf the SET_JDK_VERSION is not set the script still runs but doesn\u0027t\nconfigure JAVA_HOME properly. This change foreces the script to fail if\nSET_JDK_VERSION is not set.\n\nChange-Id: Ifdbf6c647a80e1d9e96e159a9bd7e2c097cd9400\nSigned-off-by: Vanessa Rene Valderrama \u003cvvalderrama@linuxfoundation.org\u003e\n",
        "createdOnDate": 1524685518000,
        "lastUpdatedDate": 1529935650000,
        "isOpen": true,
        "status": "NEW",
        "reviewers": [
          ids["agardner"],
          ids["lf-jenkins"],
          ids["agrimberg"],
          ids["zxiiro"]
        ],
        "comments": [
          {
            "timestamp": 1524685518000,
            "reviewer": ids["valderrv"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1524685958000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/393/"
          },
          {
            "timestamp": 1524686194000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/393/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/393"
          },
          {
            "timestamp": 1524689275000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 1: Code-Review+1\n\n(1 comment)\n\nI have no problem with setting to \u0027strict mode\u0027 but the patch titled pipe-fail and only -u is needed for this case."
          },
          {
            "timestamp": 1524694918000,
            "reviewer": ids["valderrv"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1524694970000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/394/"
          },
          {
            "timestamp": 1524695120000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/394/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/394"
          },
          {
            "timestamp": 1525103948000,
            "reviewer": ids["agrimberg"],
            "message": "Patch Set 2: Code-Review-1\n\nI think this is good, but I\u0027m slightly worried that we may be introducing a change that requires updates to jobs. Please add a note to the release notes stating that java-version must get set either globally or at the job level!"
          },
          {
            "timestamp": 1529935650000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2: Code-Review-1\n\nI think this change won\u0027t resolve what the commit description describes. SET_JDK_VERSION appears to have a default version defined in the scripts so the script will always successfully run.\n\nWe need to probably pass a non-valid option to SET_JDK_VERSION and check if it\u0027s set and make a decision to exit out of the script based on that logic."
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "3513473d69aadd89f346f7aaf0a81de97b1d0f9c",
            "parents": [
              "cb633b472a2e7a814b24071299d2cde41247f1df"
            ],
            "ref": "refs/changes/36/10236/1",
            "uploader": ids["valderrv"],
            "createdOnDate": 1524685518000,
            "author": ids["valderrv"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1524689275000,
                "grantedBy": ids["agardner"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1524686194000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "shell/update-java-alternatives.sh",
                "line": 20,
                "reviewer": ids["agardner"],
                "message": "Only the set -u (nounset) is needed to exit on undeclared variables.",
                "patchSetTimestamp": 1524685518000
              }
            ],
            "sizeInsertions": 2,
            "sizeDeletions": 0
          },
          {
            "number": 2,
            "revision": "6c105240553a72ddc77ee21329d0dc1f53b27000",
            "parents": [
              "cb633b472a2e7a814b24071299d2cde41247f1df"
            ],
            "ref": "refs/changes/36/10236/2",
            "uploader": ids["valderrv"],
            "createdOnDate": 1524694918000,
            "author": ids["valderrv"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1525103948000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1529935650000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1524695120000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 2,
            "sizeDeletions": 0
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "shell/update-java-alternatives.sh",
          "line": 20,
          "reviewer": ids["agardner"],
          "message": "Only the set -u (nounset) is needed to exit on undeclared variables.",
          "patchSetTimestamp": 1524685518000
        }
      ]
    },
    {
      "commit": {
        "project": "releng/lftools",
        "branch": "master",
        "id": "I453b322702f5699dda9bf40357a9b901e5712f36",
        "commitNumber": 7060,
        "subject": "Best practices for using JJB defaults",
        "owner": ids["askb"],
        "url": "https://gerrit.linuxfoundation.org/infra/7060",
        "commitMessage": "Best practices for using JJB defaults\n\nJira: RELENG-591\n\nChange-Id: I453b322702f5699dda9bf40357a9b901e5712f36\nSigned-off-by: Anil Belur \u003cabelur@linuxfoundation.org\u003e\n",
        "createdOnDate": 1508894648000,
        "lastUpdatedDate": 1508975736000,
        "isOpen": false,
        "status": "ABANDONED",
        "reviewers": [
          ids["zxiiro"],
          ids["agardner"],
          ids["askb"],
          ids["lf-jenkins"]
        ],
        "comments": [
          {
            "timestamp": 1508894648000,
            "reviewer": ids["askb"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1508894705000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/1/ (1/2)"
          },
          {
            "timestamp": 1508894733000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/10/ (2/2)"
          },
          {
            "timestamp": 1508895146000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/10/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/10/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-any/10\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/1/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-rtd-verify-any/1"
          },
          {
            "timestamp": 1508941453000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 1: Code-Review+1\n\n(5 comments)"
          },
          {
            "timestamp": 1508944765000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1: Code-Review-2\n\nglobal-jjb documentation has been moved to the global-jjb project. This patch seems to re-add documentation to lftools that we moved to more appropriate projects."
          },
          {
            "timestamp": 1508971776000,
            "reviewer": ids["askb"],
            "message": "Patch Set 1:\n\n\u003e global-jjb documentation has been moved to the global-jjb project.\n \u003e This patch seems to re-add documentation to lftools that we moved\n \u003e to more appropriate projects.\n\noh thanks, will submit this change to global-jjb then."
          },
          {
            "timestamp": 1508975338000,
            "reviewer": ids["askb"],
            "message": "Patch Set 1:\n\n\u003e global-jjb documentation has been moved to the global-jjb project.\n \u003e This patch seems to re-add documentation to lftools that we moved\n \u003e to more appropriate projects.\n\nShould we consider removing the docs from here!"
          },
          {
            "timestamp": 1508975712000,
            "reviewer": ids["askb"],
            "message": "Patch Set 1:\n\n\u003e \u003e global-jjb documentation has been moved to the global-jjb\n \u003e project.\n \u003e \u003e This patch seems to re-add documentation to lftools that we moved\n \u003e \u003e to more appropriate projects.\n \u003e \n \u003e Should we consider removing the docs from here!\n\nIts already removed!"
          },
          {
            "timestamp": 1508975736000,
            "reviewer": ids["askb"],
            "message": "Abandoned\n\nBest practices docs are no longer in the lftools repository."
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "571da4bd6aaa500abfb96d18d3a173218fc789c5",
            "parents": [
              "78cd27df781aa5eba37fc6d215c389a59979eadd"
            ],
            "ref": "refs/changes/60/7060/1",
            "uploader": ids["askb"],
            "createdOnDate": 1508894648000,
            "author": ids["askb"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -2,
                "grantedOnDate": 1508944765000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1508941453000,
                "grantedBy": ids["agardner"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1508895146000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "docs/best-practices.rst",
                "line": 231,
                "reviewer": ids["agardner"],
                "message": "Ah, I didn\u0027t know that.",
                "patchSetTimestamp": 1508894648000
              },
              {
                "file": "docs/best-practices.rst",
                "line": 276,
                "reviewer": ids["agardner"],
                "message": "reword, unclear, and mention -- pass an object (boolean, list or dict)",
                "patchSetTimestamp": 1508894648000
              },
              {
                "file": "docs/best-practices.rst",
                "line": 297,
                "reviewer": ids["agardner"],
                "message": "obj:disabled might be a better, simple, example eg: boolean",
                "patchSetTimestamp": 1508894648000
              },
              {
                "file": "docs/best-practices.rst",
                "line": 308,
                "reviewer": ids["agardner"],
                "message": "An example of when not to quote would make this section more useful",
                "patchSetTimestamp": 1508894648000
              },
              {
                "file": "docs/best-practices.rst",
                "line": 339,
                "reviewer": ids["agardner"],
                "message": "at both?",
                "patchSetTimestamp": 1508894648000
              }
            ],
            "sizeInsertions": 451,
            "sizeDeletions": 0
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "docs/best-practices.rst",
          "line": 231,
          "reviewer": ids["agardner"],
          "message": "Ah, I didn\u0027t know that.",
          "patchSetTimestamp": 1508894648000
        },
        {
          "file": "docs/best-practices.rst",
          "line": 276,
          "reviewer": ids["agardner"],
          "message": "reword, unclear, and mention -- pass an object (boolean, list or dict)",
          "patchSetTimestamp": 1508894648000
        },
        {
          "file": "docs/best-practices.rst",
          "line": 297,
          "reviewer": ids["agardner"],
          "message": "obj:disabled might be a better, simple, example eg: boolean",
          "patchSetTimestamp": 1508894648000
        },
        {
          "file": "docs/best-practices.rst",
          "line": 308,
          "reviewer": ids["agardner"],
          "message": "An example of when not to quote would make this section more useful",
          "patchSetTimestamp": 1508894648000
        },
        {
          "file": "docs/best-practices.rst",
          "line": 339,
          "reviewer": ids["agardner"],
          "message": "at both?",
          "patchSetTimestamp": 1508894648000
        }
      ]
    },
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "If2edba598b47484b1708f1e0f3fb96f035511841",
        "commitNumber": 10212,
        "subject": "Configure tox tests allow serial execution",
        "owner": ids["valderrv"],
        "url": "https://gerrit.linuxfoundation.org/infra/10212",
        "commitMessage": "Configure tox tests allow serial execution\n\nConfiguring tox tests to allow serial or parallel execution configurable\nwithin JJB by setting the PARALLEL parameter to true or false.\n\nIssue: RELENG-912\nChange-Id: If2edba598b47484b1708f1e0f3fb96f035511841\nSigned-off-by: Vanessa Rene Valderrama \u003cvvalderrama@linuxfoundation.org\u003e\n",
        "createdOnDate": 1524600060000,
        "lastUpdatedDate": 1529674103000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["zxiiro"],
          ids["valderrv"],
          ids["lf-jenkins"],
          ids["agardner"],
          ids["bramwelt"],
          ids["agrimberg"]
        ],
        "comments": [
          {
            "timestamp": 1524600060000,
            "reviewer": ids["valderrv"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1524600097000,
            "reviewer": ids["valderrv"],
            "message": "Patch Set 1: Code-Review-2\n\nThis change is a work in progress and not ready for review."
          },
          {
            "timestamp": 1524602508000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1524602980000,
            "reviewer": ids["valderrv"],
            "message": "Uploaded patch set 2: Commit message was updated."
          },
          {
            "timestamp": 1524603019000,
            "reviewer": ids["valderrv"],
            "message": "Patch Set 1: -Code-Review"
          },
          {
            "timestamp": 1524603099000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/387/"
          },
          {
            "timestamp": 1524603270000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/387/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/387/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/387"
          },
          {
            "timestamp": 1524604140000,
            "reviewer": ids["valderrv"],
            "message": "Patch Set 2: -Code-Review"
          },
          {
            "timestamp": 1524608140000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2: Code-Review-1\n\n(2 comments)\n\n@Vaness not sure if you\u0027re ready for review since you removed the code-review vote but the code hasn\u0027t changed since patchset 1. The current patch seems incomplete and does not seem to tie into JJB. We need to add the parallel parameter to the JJB side of the code."
          },
          {
            "timestamp": 1524676208000,
            "reviewer": ids["valderrv"],
            "message": "Uploaded patch set 3."
          },
          {
            "timestamp": 1524676422000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/391/"
          },
          {
            "timestamp": 1524676582000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/391/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/391/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/391"
          },
          {
            "timestamp": 1524676819000,
            "reviewer": ids["valderrv"],
            "message": "Uploaded patch set 4."
          },
          {
            "timestamp": 1524677041000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/392/"
          },
          {
            "timestamp": 1524677246000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/392/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/392"
          },
          {
            "timestamp": 1524690472000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 4: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1524769528000,
            "reviewer": ids["valderrv"],
            "message": "Uploaded patch set 5."
          },
          {
            "timestamp": 1524769582000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/395/"
          },
          {
            "timestamp": 1524769795000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/395/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/395"
          },
          {
            "timestamp": 1524770305000,
            "reviewer": ids["bramwelt"],
            "message": "Patch Set 5:\n\n(1 comment)\n\nHave you added a \u0027PARALLEL\u0027 parameter to the job config?"
          },
          {
            "timestamp": 1524770656000,
            "reviewer": ids["valderrv"],
            "message": "Patch Set 5:\n\n(1 comment)\n\nI added the PARALLEL parameter to lf-python-jobs.yaml"
          },
          {
            "timestamp": 1524841616000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 5: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1524845730000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 4:\n\n(1 comment)"
          },
          {
            "timestamp": 1524849280000,
            "reviewer": ids["valderrv"],
            "message": "Uploaded patch set 6."
          },
          {
            "timestamp": 1524849440000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/398/"
          },
          {
            "timestamp": 1524849609000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 6: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/398/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/398"
          },
          {
            "timestamp": 1525094161000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 6: Code-Review-1\n\n(1 comment)\n\nPlease link to a sandbox test showing the parallel parameter working."
          },
          {
            "timestamp": 1525122146000,
            "reviewer": ids["valderrv"],
            "message": "Uploaded patch set 7."
          },
          {
            "timestamp": 1525122163000,
            "reviewer": ids["valderrv"],
            "message": "Patch Set 7: Code-Review-1\n\ntesting on the sandbox"
          },
          {
            "timestamp": 1525122321000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/402/"
          },
          {
            "timestamp": 1525122520000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 7: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/402/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/402"
          },
          {
            "timestamp": 1525204095000,
            "reviewer": ids["valderrv"],
            "message": "Patch Set 7: -Code-Review\n\nSandbox link:  https://jenkins.acumos.org/sandbox/job/acumos-python-client-tox-verify-master/\n\nTests include:\nNot setting parallel\nparallel\u003dtrue\nparallel\u003dfalse"
          },
          {
            "timestamp": 1525207059000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 7: Code-Review+1\n\nLooks good, thanks!"
          },
          {
            "timestamp": 1525288676000,
            "reviewer": ids["agrimberg"],
            "message": "Patch Set 7: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1525289434000,
            "reviewer": ids["valderrv"],
            "message": "Uploaded patch set 8: Commit message was updated."
          },
          {
            "timestamp": 1525289453000,
            "reviewer": ids["agrimberg"],
            "message": "Patch Set 8: Code-Review+2"
          },
          {
            "timestamp": 1525289513000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 8: Code-Review+1"
          },
          {
            "timestamp": 1525289691000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/403/"
          },
          {
            "timestamp": 1525289842000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 8: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/403/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/403"
          },
          {
            "timestamp": 1525305799000,
            "reviewer": ids["agrimberg"],
            "message": "Change has been successfully merged by Andrew Grimberg"
          },
          {
            "timestamp": 1529674103000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 8:\n\nDoh, just realized this patch causes a bug described here: RELENG-1042\n\nworking on a fix now..."
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "8734c3d3bf13e7de97ac369523ad0d4dd4802338",
            "parents": [
              "0b1d0ba4945b93dc5d86fffef20f4be44fc5a2f9"
            ],
            "ref": "refs/changes/12/10212/1",
            "uploader": ids["valderrv"],
            "createdOnDate": 1524600060000,
            "author": ids["valderrv"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [
              {
                "file": "/COMMIT_MSG",
                "line": 12,
                "reviewer": ids["zxiiro"],
                "message": "Just above the Change-Id line add:\n\n Issue: RELENG-912\n\nThis way we can reference back to the Jira if needed.",
                "patchSetTimestamp": 1524600060000
              }
            ],
            "sizeInsertions": 20,
            "sizeDeletions": -6
          },
          {
            "number": 2,
            "revision": "8681d951bb1ed9f942bb148f5b7647a1a3e9394c",
            "parents": [
              "0b1d0ba4945b93dc5d86fffef20f4be44fc5a2f9"
            ],
            "ref": "refs/changes/12/10212/2",
            "uploader": ids["valderrv"],
            "createdOnDate": 1524602980000,
            "author": ids["valderrv"],
            "isDraft": false,
            "kind": "NO_CODE_CHANGE",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1524608140000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1524603270000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "shell/tox-run.sh",
                "line": 32,
                "reviewer": ids["zxiiro"],
                "message": "This needs to be hooked into JJB.",
                "patchSetTimestamp": 1524602980000
              },
              {
                "file": "shell/tox-run.sh",
                "line": 40,
                "reviewer": ids["zxiiro"],
                "message": "We should probably rename detox_status to just tox_status so that the test at the bottom of this script can parse both tox and detox statuses.",
                "patchSetTimestamp": 1524602980000
              }
            ],
            "sizeInsertions": 20,
            "sizeDeletions": -6
          },
          {
            "number": 3,
            "revision": "f19eb7370a39105f24648a1d243e7bcc652b3f25",
            "parents": [
              "cb633b472a2e7a814b24071299d2cde41247f1df"
            ],
            "ref": "refs/changes/12/10212/3",
            "uploader": ids["valderrv"],
            "createdOnDate": 1524676208000,
            "author": ids["valderrv"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1524676582000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 21,
            "sizeDeletions": -6
          },
          {
            "number": 4,
            "revision": "79a482599e716ded98735bc9e0a19d1abd8fbe0c",
            "parents": [
              "cb633b472a2e7a814b24071299d2cde41247f1df"
            ],
            "ref": "refs/changes/12/10212/4",
            "uploader": ids["valderrv"],
            "createdOnDate": 1524676819000,
            "author": ids["valderrv"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1524690472000,
                "grantedBy": ids["agardner"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1524677246000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "shell/tox-run.sh",
                "line": 32,
                "reviewer": ids["agardner"],
                "message": "why is this set? also, perhaps catch if PARALLEL is unset set to false.",
                "patchSetTimestamp": 1524676819000
              },
              {
                "file": "shell/tox-run.sh",
                "line": 32,
                "reviewer": ids["zxiiro"],
                "message": "PARALLEL\u003d\"${PARALLEL:-true}\"",
                "patchSetTimestamp": 1524676819000
              }
            ],
            "sizeInsertions": 22,
            "sizeDeletions": -7
          },
          {
            "number": 5,
            "revision": "2192111889305dd00fa7d0f9bbcee00eebcd5360",
            "parents": [
              "cb633b472a2e7a814b24071299d2cde41247f1df"
            ],
            "ref": "refs/changes/12/10212/5",
            "uploader": ids["valderrv"],
            "createdOnDate": 1524769528000,
            "author": ids["valderrv"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1524841616000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1524769795000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "jjb/lf-python-jobs.yaml",
                "line": 101,
                "reviewer": ids["zxiiro"],
                "message": "I think you meant to put this in the tox job configuration. This here is applying it to the \"CLM\" job not tox.\n\nAlso you need to add a string parameter in the \"parameters:\" section of JJB for Jenkins to add an actual parameter. The definition here purely is to tell JJB what variable \"parallel\" should be set to by default if the user does not provide on. We still need to define the parameter itself.",
                "patchSetTimestamp": 1524769528000
              },
              {
                "file": "shell/tox-run.sh",
                "line": 52,
                "reviewer": ids["bramwelt"],
                "message": "Since the default has been to run tox in parallel, instead of checking if Parallel is unset, it can always default to true \"PARALLEL\u003d${PARALLEL:-true}\".",
                "patchSetTimestamp": 1524769528000
              },
              {
                "file": "shell/tox-run.sh",
                "line": 52,
                "reviewer": ids["valderrv"],
                "message": "I changed the patch to catch if PARALLEL is unset set to false based on a previous review.",
                "patchSetTimestamp": 1524769528000
              }
            ],
            "sizeInsertions": 23,
            "sizeDeletions": -7
          },
          {
            "number": 6,
            "revision": "39be1026ce4511f78351a77e7f7a94be4f71806c",
            "parents": [
              "cb633b472a2e7a814b24071299d2cde41247f1df"
            ],
            "ref": "refs/changes/12/10212/6",
            "uploader": ids["valderrv"],
            "createdOnDate": 1524849280000,
            "author": ids["valderrv"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1525094161000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1524849609000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "jjb/lf-python-jobs.yaml",
                "line": 447,
                "reviewer": ids["zxiiro"],
                "message": "parallel is not a valid parameter of the git-scm plugin:\n\nhttps://docs.openstack.org/infra/jenkins-job-builder/scm.html\n\nThis is not what we need here though. What we to do is define a environment variable that Jenkins passes to the bash script. To do that we need to declare a Jenkins Parameter. You can do that using the \"string\" parameter in JJB:\n\nhttps://docs.openstack.org/infra/jenkins-job-builder/parameters.html\n\nWe have a few examples of this in global-jjb for example in the Python CLM job:\n\nhttps://github.com/lfit/releng-global-jjb/blob/master/jjb/lf-python-jobs.yaml#L110-L114",
                "patchSetTimestamp": 1524849280000
              }
            ],
            "sizeInsertions": 20,
            "sizeDeletions": -6
          },
          {
            "number": 7,
            "revision": "61a01a9ce259bafec0045901b3c91788c05ea236",
            "parents": [
              "35adc33717a2a9ca867c5a624904a963d8449ae6"
            ],
            "ref": "refs/changes/12/10212/7",
            "uploader": ids["valderrv"],
            "createdOnDate": 1525122146000,
            "author": ids["valderrv"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1525288676000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1525207059000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1525122520000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "/COMMIT_MSG",
                "line": 12,
                "reviewer": ids["agrimberg"],
                "message": "This really should be\n\nIssue: RELENG-912\n\nI don\u0027t like seeing non-annotated footer meta-data",
                "patchSetTimestamp": 1525122146000
              }
            ],
            "sizeInsertions": 27,
            "sizeDeletions": -6
          },
          {
            "number": 8,
            "revision": "68bfb0c6bd7ba0c23e665ba4045acbba0e26af02",
            "parents": [
              "35adc33717a2a9ca867c5a624904a963d8449ae6"
            ],
            "ref": "refs/changes/12/10212/8",
            "uploader": ids["valderrv"],
            "createdOnDate": 1525289434000,
            "author": ids["valderrv"],
            "isDraft": false,
            "kind": "NO_CODE_CHANGE",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1525289453000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1525305799000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1525289513000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1525289842000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 27,
            "sizeDeletions": -6
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "shell/tox-run.sh",
          "line": 32,
          "reviewer": ids["agardner"],
          "message": "why is this set? also, perhaps catch if PARALLEL is unset set to false.",
          "patchSetTimestamp": 1524676819000
        }
      ]
    }
  ],
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
    },
    {
      "commit": {
        "project": "releng/lftools",
        "branch": "master",
        "id": "I8458798d102ba8eac401b1350a029247fa1910cc",
        "commitNumber": 6857,
        "subject": "ldap-lookup and Check_committers scripts",
        "owner": ids["agardner"],
        "url": "https://gerrit.linuxfoundation.org/infra/6857",
        "commitMessage": "ldap-lookup and Check_committers scripts\n\n---\nldap-lookup:\nProvides a way to ouput: ldap-group \"lfid\",\"Full Name\",\"email@address\"\n\n---\nCheck_committers.sh:\n\nreads output of ldap-lookup.\nSearches gerrit by email address to see user participation\noutputs users that have not participated within the\nlast six months, or at all.\n\nOutput example:\nopnfv-gerrit-ipv6-submitters \"foo baz\" has \\\nnever used gerrit foo@bar.com\nopnfv-gerrit-doctor-submitters \"bar biz\" has not\nused gerrit in 6 months bar@bar.com\n\nAlso usefull for finding multiple user accounts, which may be\nabandonded.\n\n---\nBuild_INFO_committers.sh:\n\ncalls ../3rdparty/ldap-lookup.py \"$1\"\n  where $1 is the ldap-group name you would like to build yaml for your\nINFO.yaml file\n\nOutput example:\n    - name: \u0027Aric Gardner\u0027\n      email: \u0027agardner@linuxfoundation.org\u0027\n      company: \u0027linuxfoundation\u0027\n      uid: \u0027 agardner\u0027\n      timezone: \u0027\u0027\n    - name: \u0027Trevor Bramwell\u0027\n      email: \u0027tbramwell@linuxfoundation.org\u0027\n      company: \u0027linuxfoundation\u0027\n      uid: \u0027 bramwelt\u0027\n      timezone: \u0027\u0027\n\nIssue: RELENG-407\nChange-Id: I8458798d102ba8eac401b1350a029247fa1910cc\nSigned-off-by: agardner \u003cagardner@linuxfoundation.org\u003e\n",
        "createdOnDate": 1507920445000,
        "lastUpdatedDate": 1531334124000,
        "isOpen": false,
        "status": "ABANDONED",
        "reviewers": [
          ids["zxiiro"],
          ids["agardner"],
          ids["lf-jenkins"],
          ids["agrimberg"],
          ids["askb"]
        ],
        "comments": [
          {
            "timestamp": 1507920445000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1507920590000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/288/"
          },
          {
            "timestamp": 1507920767000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/288/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-master/288/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-master/288"
          },
          {
            "timestamp": 1508181574000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 1:\n\nreverify"
          },
          {
            "timestamp": 1508182016000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 1:\n\nretrigger"
          },
          {
            "timestamp": 1508183584000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 1:\n\nrecheck"
          },
          {
            "timestamp": 1508183627000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/4/"
          },
          {
            "timestamp": 1508183954000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/4/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/4/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-any/4"
          },
          {
            "timestamp": 1508188238000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1508188290000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/5/"
          },
          {
            "timestamp": 1508188606000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/5/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/5/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-lftools-tox-verify-any/5"
          },
          {
            "timestamp": 1518199637000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 3."
          },
          {
            "timestamp": 1518199729000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/46/"
          },
          {
            "timestamp": 1518200316000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/46/ : FAILURE\n\nFile shell/Check_committers is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/46/ )\n\nThe commit message body (all lines but the first line) contains lines that are too long. The should be 72 characters or less with the possible exception of unbreakable things like URLs. Please update the commit message as necessary to pass this check. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/46/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/46"
          },
          {
            "timestamp": 1521146036000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 4."
          },
          {
            "timestamp": 1521146278000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/61/"
          },
          {
            "timestamp": 1521146397000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 4: Code-Review-1\n\nWe should try to link those scripts into lftools rather than just dumping the code. Also should use the proper extensions so that the linter picks them up."
          },
          {
            "timestamp": 1521146653000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/61/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/61/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/61"
          },
          {
            "timestamp": 1521147468000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 5."
          },
          {
            "timestamp": 1521147847000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/62/"
          },
          {
            "timestamp": 1521148115000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/62/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/62/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/62"
          },
          {
            "timestamp": 1522776976000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 6."
          },
          {
            "timestamp": 1522777517000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/64/"
          },
          {
            "timestamp": 1522777846000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 6: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/64/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/64/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/64"
          },
          {
            "timestamp": 1522779582000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 7."
          },
          {
            "timestamp": 1522779885000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/65/"
          },
          {
            "timestamp": 1522780104000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 8."
          },
          {
            "timestamp": 1522780131000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 7: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/65/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/65/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/65"
          },
          {
            "timestamp": 1522780131000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/66/"
          },
          {
            "timestamp": 1522780390000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 8: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/66/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/66/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/66"
          },
          {
            "timestamp": 1527778744000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 9: Commit message was updated."
          },
          {
            "timestamp": 1527778775000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/93/"
          },
          {
            "timestamp": 1527779008000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 9: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/93/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/93/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/93"
          },
          {
            "timestamp": 1527779533000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 10: Patch Set 9 was rebased."
          },
          {
            "timestamp": 1527779775000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/94/"
          },
          {
            "timestamp": 1527779974000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 10: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/94/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/94/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/94"
          },
          {
            "timestamp": 1527780596000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 11."
          },
          {
            "timestamp": 1527780723000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 11:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/95/"
          },
          {
            "timestamp": 1527780938000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 11: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/95/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/95"
          },
          {
            "timestamp": 1527783128000,
            "reviewer": ids["agrimberg"],
            "message": "Patch Set 11: Code-Review-1\n\n(3 comments)"
          },
          {
            "timestamp": 1527820552000,
            "reviewer": ids["askb"],
            "message": "Patch Set 11:\n\n(1 comment)"
          },
          {
            "timestamp": 1529685412000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 12: Patch Set 11 was rebased"
          },
          {
            "timestamp": 1529685545000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 13: Commit message was updated."
          },
          {
            "timestamp": 1529685695000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 13:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/107/"
          },
          {
            "timestamp": 1529685865000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 13: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/107/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/107"
          },
          {
            "timestamp": 1529687771000,
            "reviewer": ids["agrimberg"],
            "message": "Patch Set 13: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1529693787000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 14."
          },
          {
            "timestamp": 1529693893000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 15."
          },
          {
            "timestamp": 1529694013000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 16."
          },
          {
            "timestamp": 1529694040000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 17: Commit message was updated."
          },
          {
            "timestamp": 1529694065000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 17:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/108/"
          },
          {
            "timestamp": 1529694267000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 17: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/108/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/108"
          },
          {
            "timestamp": 1529697577000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 18."
          },
          {
            "timestamp": 1529697697000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 18: Code-Review-1\n\n3rdparty/ldap-lookup.py is putting an extra space before my uid. not sure why."
          },
          {
            "timestamp": 1529697808000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 18: -Code-Review\n\n(1 comment)"
          },
          {
            "timestamp": 1529697837000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 18:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/109/"
          },
          {
            "timestamp": 1529697886000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 19: Commit message was updated."
          },
          {
            "timestamp": 1529697906000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 18: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/109/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/109/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/109"
          },
          {
            "timestamp": 1529698095000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 19:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/110/"
          },
          {
            "timestamp": 1529698295000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 19: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/110/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/110/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/110"
          },
          {
            "timestamp": 1529699729000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 20."
          },
          {
            "timestamp": 1529699925000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 20:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/111/"
          },
          {
            "timestamp": 1529700004000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 21."
          },
          {
            "timestamp": 1529700022000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 20: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/111/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/111/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/111"
          },
          {
            "timestamp": 1529700196000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 21:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/112/"
          },
          {
            "timestamp": 1529700375000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 21: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/112/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/112/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/112"
          },
          {
            "timestamp": 1529935440000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 21: Code-Review-1\n\nI still think this script should hook into lftools rather than being just random scripts lying around in the lftools directory."
          },
          {
            "timestamp": 1530024125000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 22."
          },
          {
            "timestamp": 1530024296000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 22:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/115/"
          },
          {
            "timestamp": 1530024497000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 22: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/115/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/115"
          },
          {
            "timestamp": 1530812116000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 22: Code-Review-2\n\nReplaced by https://gerrit.linuxfoundation.org/infra/#/c/11558/"
          },
          {
            "timestamp": 1531334124000,
            "reviewer": ids["agardner"],
            "message": "Abandoned"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "2523df052ddf90109f5922043ea9c315cc8a7fe5",
            "parents": [
              "9a42505848cecfbd31ba7e08a9a9a0bc32859d78"
            ],
            "ref": "refs/changes/57/6857/1",
            "uploader": ids["agardner"],
            "createdOnDate": 1507920445000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1508183954000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 182,
            "sizeDeletions": 0
          },
          {
            "number": 2,
            "revision": "788d40b56587837a839220b59e9befd457b867a3",
            "parents": [
              "9a42505848cecfbd31ba7e08a9a9a0bc32859d78"
            ],
            "ref": "refs/changes/57/6857/2",
            "uploader": ids["agardner"],
            "createdOnDate": 1508188238000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1508188606000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 200,
            "sizeDeletions": 0
          },
          {
            "number": 3,
            "revision": "bc81b38cea03be3b9e1583ecd059c39233ebf3dc",
            "parents": [
              "9a42505848cecfbd31ba7e08a9a9a0bc32859d78"
            ],
            "ref": "refs/changes/57/6857/3",
            "uploader": ids["agardner"],
            "createdOnDate": 1518199637000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1518200316000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 193,
            "sizeDeletions": 0
          },
          {
            "number": 4,
            "revision": "c6986da0f39267ebd05c3360e3e44494f4118d37",
            "parents": [
              "9a42505848cecfbd31ba7e08a9a9a0bc32859d78"
            ],
            "ref": "refs/changes/57/6857/4",
            "uploader": ids["agardner"],
            "createdOnDate": 1521146036000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1521146397000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1521146653000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 206,
            "sizeDeletions": 0
          },
          {
            "number": 5,
            "revision": "e5fe2bcf7c10d366926c7cd82a8e5db05ed7edf9",
            "parents": [
              "9a42505848cecfbd31ba7e08a9a9a0bc32859d78"
            ],
            "ref": "refs/changes/57/6857/5",
            "uploader": ids["agardner"],
            "createdOnDate": 1521147468000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1521148115000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 206,
            "sizeDeletions": 0
          },
          {
            "number": 6,
            "revision": "3d37415d48f5273c1a3819604662b1e04a0a185a",
            "parents": [
              "9a42505848cecfbd31ba7e08a9a9a0bc32859d78"
            ],
            "ref": "refs/changes/57/6857/6",
            "uploader": ids["agardner"],
            "createdOnDate": 1522776976000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1522777846000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 206,
            "sizeDeletions": 0
          },
          {
            "number": 7,
            "revision": "185d7eafcd414b895e6546db93609834dfa51fe0",
            "parents": [
              "cda9bc3801eb5838204a20f911eff648d16c70c5"
            ],
            "ref": "refs/changes/57/6857/7",
            "uploader": ids["agardner"],
            "createdOnDate": 1522779582000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1522780131000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 208,
            "sizeDeletions": 0
          },
          {
            "number": 8,
            "revision": "4281cbe748c2c423c75f50e152f0b75c8858b81c",
            "parents": [
              "cda9bc3801eb5838204a20f911eff648d16c70c5"
            ],
            "ref": "refs/changes/57/6857/8",
            "uploader": ids["agardner"],
            "createdOnDate": 1522780104000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1522780390000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 207,
            "sizeDeletions": 0
          },
          {
            "number": 9,
            "revision": "62b69adc0c2ca8b9fa1014fe3cd62bdb3af9555b",
            "parents": [
              "cda9bc3801eb5838204a20f911eff648d16c70c5"
            ],
            "ref": "refs/changes/57/6857/9",
            "uploader": ids["agardner"],
            "createdOnDate": 1527778744000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "NO_CODE_CHANGE",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1527779008000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 207,
            "sizeDeletions": 0
          },
          {
            "number": 10,
            "revision": "2589a11b9795bcb832f08705bf3c077f38ee1b31",
            "parents": [
              "f881931f8a8b2fb45179312ba05cf97b788770ff"
            ],
            "ref": "refs/changes/57/6857/10",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1527779533000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "TRIVIAL_REBASE",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1527779974000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 207,
            "sizeDeletions": 0
          },
          {
            "number": 11,
            "revision": "2f8fd3ee4e8fbcc6ac35a08464f4fbc6cec87e27",
            "parents": [
              "f881931f8a8b2fb45179312ba05cf97b788770ff"
            ],
            "ref": "refs/changes/57/6857/11",
            "uploader": ids["agardner"],
            "createdOnDate": 1527780596000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1527783128000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1527780938000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "/COMMIT_MSG",
                "line": 9,
                "reviewer": ids["agrimberg"],
                "message": "Move this to the footer in the following format:\n\nIssue: RELENG-407",
                "patchSetTimestamp": 1527780596000
              },
              {
                "file": "3rdparty/ldap-lookup.py",
                "line": 25,
                "reviewer": ids["agrimberg"],
                "message": "While I understand that our standard use case is going to be LF infra, can we please not hard code the infra into the script? I would prefer a configuration file and / or CLI switches for setting this information",
                "patchSetTimestamp": 1527780596000
              },
              {
                "file": "shell/Check_committers.sh",
                "line": 53,
                "reviewer": ids["agrimberg"],
                "message": "I don\u0027t like tools telling us to loosen system security. Can you please find a way to do this / inform how to update properly so that we can use the certs being provided by the infrastructure?",
                "patchSetTimestamp": 1527780596000
              },
              {
                "file": "shell/Check_committers.sh",
                "line": 53,
                "reviewer": ids["askb"],
                "message": "should be using `~/.ldaprc` for users\n\nHOST ldap.fqdn \nPORT 636  \nTLS_REQCERT ALLOW\n\nNote: this setting requires pulling in CA certs from letsencrypt for this to work. \n\ndoes this work with vpn?",
                "patchSetTimestamp": 1527780596000
              }
            ],
            "sizeInsertions": 206,
            "sizeDeletions": 0
          },
          {
            "number": 12,
            "revision": "7908152816f92f82e423199dc38111c28c94fd74",
            "parents": [
              "aec13d06c76e1386dd12e0dc10ef9ae0f117c664"
            ],
            "ref": "refs/changes/57/6857/12",
            "uploader": ids["agardner"],
            "createdOnDate": 1529685412000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "TRIVIAL_REBASE",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 206,
            "sizeDeletions": 0
          },
          {
            "number": 13,
            "revision": "e54899f5244897a2283c15c7503165e772ae99da",
            "parents": [
              "aec13d06c76e1386dd12e0dc10ef9ae0f117c664"
            ],
            "ref": "refs/changes/57/6857/13",
            "uploader": ids["agardner"],
            "createdOnDate": 1529685545000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "NO_CODE_CHANGE",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1529687771000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1529685865000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "/COMMIT_MSG",
                "line": 29,
                "reviewer": ids["agrimberg"],
                "message": "Extraneous line. This line makes it part of the body and not the footer. Remove this please.",
                "patchSetTimestamp": 1529685545000
              }
            ],
            "sizeInsertions": 206,
            "sizeDeletions": 0
          },
          {
            "number": 14,
            "revision": "247b09f381ea6a86a0ccae4071fb8643e4d6a274",
            "parents": [
              "aec13d06c76e1386dd12e0dc10ef9ae0f117c664"
            ],
            "ref": "refs/changes/57/6857/14",
            "uploader": ids["agardner"],
            "createdOnDate": 1529693787000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 209,
            "sizeDeletions": 0
          },
          {
            "number": 15,
            "revision": "30693351d37de097fc867f23986c809af0a5b01d",
            "parents": [
              "aec13d06c76e1386dd12e0dc10ef9ae0f117c664"
            ],
            "ref": "refs/changes/57/6857/15",
            "uploader": ids["agardner"],
            "createdOnDate": 1529693893000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 209,
            "sizeDeletions": 0
          },
          {
            "number": 16,
            "revision": "574649bfa9f27febe112a3f89fce3b5f3fd0dcf1",
            "parents": [
              "aec13d06c76e1386dd12e0dc10ef9ae0f117c664"
            ],
            "ref": "refs/changes/57/6857/16",
            "uploader": ids["agardner"],
            "createdOnDate": 1529694013000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 209,
            "sizeDeletions": 0
          },
          {
            "number": 17,
            "revision": "9b18f4a2d445e1680052f3c3e7391c557c842ed0",
            "parents": [
              "aec13d06c76e1386dd12e0dc10ef9ae0f117c664"
            ],
            "ref": "refs/changes/57/6857/17",
            "uploader": ids["agardner"],
            "createdOnDate": 1529694040000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "NO_CODE_CHANGE",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1529694267000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 209,
            "sizeDeletions": 0
          },
          {
            "number": 18,
            "revision": "4351957a186e2aa651ea6d6d49c9417d35325a4a",
            "parents": [
              "aec13d06c76e1386dd12e0dc10ef9ae0f117c664"
            ],
            "ref": "refs/changes/57/6857/18",
            "uploader": ids["agardner"],
            "createdOnDate": 1529697577000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1529697906000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "3rdparty/ldap-lookup.py",
                "line": 96,
                "reviewer": ids["agardner"],
                "message": "a space is output here before the uid. not sure where its coming form.  \neg: opnfv-gerrit-releng-submitters, agardner,Aric Gardner,agardner@linuxfoundation.org",
                "patchSetTimestamp": 1529697577000
              }
            ],
            "sizeInsertions": 268,
            "sizeDeletions": 0
          },
          {
            "number": 19,
            "revision": "ced9423ac47eb4b158f4dbb84dcf26e15c40045a",
            "parents": [
              "aec13d06c76e1386dd12e0dc10ef9ae0f117c664"
            ],
            "ref": "refs/changes/57/6857/19",
            "uploader": ids["agardner"],
            "createdOnDate": 1529697886000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "NO_CODE_CHANGE",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1529698295000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 268,
            "sizeDeletions": 0
          },
          {
            "number": 20,
            "revision": "d781f2dace85cbc585b96facce8c55024d285a3b",
            "parents": [
              "aec13d06c76e1386dd12e0dc10ef9ae0f117c664"
            ],
            "ref": "refs/changes/57/6857/20",
            "uploader": ids["agardner"],
            "createdOnDate": 1529699729000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1529700022000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 269,
            "sizeDeletions": 0
          },
          {
            "number": 21,
            "revision": "f83f8e05d2bb3e84a4874f433bbf231a8060a3a4",
            "parents": [
              "aec13d06c76e1386dd12e0dc10ef9ae0f117c664"
            ],
            "ref": "refs/changes/57/6857/21",
            "uploader": ids["agardner"],
            "createdOnDate": 1529700004000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1529935440000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1529700375000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 267,
            "sizeDeletions": 0
          },
          {
            "number": 22,
            "revision": "d9961e2b229d7b9e83e7eccc6bdfcf1d505642dd",
            "parents": [
              "aec13d06c76e1386dd12e0dc10ef9ae0f117c664"
            ],
            "ref": "refs/changes/57/6857/22",
            "uploader": ids["agardner"],
            "createdOnDate": 1530024125000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -2,
                "grantedOnDate": 1530812116000,
                "grantedBy": ids["agardner"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1530024497000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 267,
            "sizeDeletions": 0
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "/COMMIT_MSG",
          "line": 9,
          "reviewer": ids["agrimberg"],
          "message": "Move this to the footer in the following format:\n\nIssue: RELENG-407",
          "patchSetTimestamp": 1527780596000
        },
        {
          "file": "3rdparty/ldap-lookup.py",
          "line": 25,
          "reviewer": ids["agrimberg"],
          "message": "While I understand that our standard use case is going to be LF infra, can we please not hard code the infra into the script? I would prefer a configuration file and / or CLI switches for setting this information",
          "patchSetTimestamp": 1527780596000
        },
        {
          "file": "shell/Check_committers.sh",
          "line": 53,
          "reviewer": ids["agrimberg"],
          "message": "I don\u0027t like tools telling us to loosen system security. Can you please find a way to do this / inform how to update properly so that we can use the certs being provided by the infrastructure?",
          "patchSetTimestamp": 1527780596000
        },
        {
          "file": "shell/Check_committers.sh",
          "line": 53,
          "reviewer": ids["askb"],
          "message": "should be using `~/.ldaprc` for users\n\nHOST ldap.fqdn \nPORT 636  \nTLS_REQCERT ALLOW\n\nNote: this setting requires pulling in CA certs from letsencrypt for this to work. \n\ndoes this work with vpn?",
          "patchSetTimestamp": 1527780596000
        },
        {
          "file": "/COMMIT_MSG",
          "line": 29,
          "reviewer": ids["agrimberg"],
          "message": "Extraneous line. This line makes it part of the body and not the footer. Remove this please.",
          "patchSetTimestamp": 1529685545000
        }
      ]
    },
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "Ie794636e49f97ff2ac2735e81c407b57a3470f55",
        "commitNumber": 10705,
        "subject": "Support recheck and reverify in global-jjb",
        "owner": ids["agardner"],
        "url": "https://gerrit.linuxfoundation.org/infra/10705",
        "commitMessage": "Support recheck and reverify in global-jjb\n\nIn OPNFV we are using reverify as a convention (we also support recheck)\nThis was previously deprecated in global-jjb\nBut I\u0027m adding it back to not confuse our users\n\nChange-Id: Ie794636e49f97ff2ac2735e81c407b57a3470f55\nSigned-off-by: Aric Gardner \u003cagardner@linuxfoundation.org\u003e\n",
        "createdOnDate": 1526587776000,
        "lastUpdatedDate": 1531495847000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["agrimberg"],
          ids["zxiiro"],
          ids["agardner"],
          ids["bramwelt"],
          ids["askb"],
          ids["lf-jenkins"]
        ],
        "comments": [
          {
            "timestamp": 1526587776000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1526587957000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/443/"
          },
          {
            "timestamp": 1526588159000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/443/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/443"
          },
          {
            "timestamp": 1526596014000,
            "reviewer": ids["bramwelt"],
            "message": "Patch Set 1: Code-Review+2"
          },
          {
            "timestamp": 1526597090000,
            "reviewer": ids["askb"],
            "message": "Patch Set 1: Code-Review-2\n\nIs there any specific reason we cant use same notation across projects?"
          },
          {
            "timestamp": 1526597326000,
            "reviewer": ids["askb"],
            "message": "Patch Set 1:\n\nchange LGTM! Added a -2 so that my comment gets some attention before it gets merged."
          },
          {
            "timestamp": 1526659121000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 1:\n\n@Anil we have used reverify as a convention since our inception, I don\u0027t want to confuse users due to the switch to global jjb. I discussed with Andy in slack before creating this change."
          },
          {
            "timestamp": 1526838506000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1:\n\n(2 comments)\n\nIf we merge this, we should update all of ODL\u0027s jobs to support both recheck and reverify too before upgrading to whichever version of global-jjb this lands in otherwise if someone types \"reverify\" in ODL they will only run global-jjb jobs and again cause confusion on the ODL side.\n\n(This was the reason we originally dropped reverify in ODL)\n\nHowever if we can ensure all the regexes are the same everywhere I don\u0027t see this as a problem.\n\nOne suggestion to use \u0027(recheck|reverify)$\u0027 as the search pattern, both reducing the number of lines added as well as makes it easier for folks who are copy pasting to get the full regex."
          },
          {
            "timestamp": 1526860683000,
            "reviewer": ids["askb"],
            "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1529684819000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1529684973000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 2:\n\n(1 comment)"
          },
          {
            "timestamp": 1529685078000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/602/"
          },
          {
            "timestamp": 1529685287000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/602/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/602"
          },
          {
            "timestamp": 1529761731000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2:\n\n(1 comment)"
          },
          {
            "timestamp": 1529848497000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2: Code-Review-1\n\n(2 comments)"
          },
          {
            "timestamp": 1530302729000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 3."
          },
          {
            "timestamp": 1530302825000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/620/"
          },
          {
            "timestamp": 1530302973000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/620/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/620"
          },
          {
            "timestamp": 1530359807000,
            "reviewer": ids["askb"],
            "message": "Patch Set 3: Code-Review+2"
          },
          {
            "timestamp": 1530398819000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 4."
          },
          {
            "timestamp": 1530398852000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 4:\n\nUpdated to fix all instances of \n\n recheck$|^reverify to (recheck|reverify)"
          },
          {
            "timestamp": 1530398895000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/621/"
          },
          {
            "timestamp": 1530399062000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/621/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/621"
          },
          {
            "timestamp": 1531238824000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 4: Code-Review+1"
          },
          {
            "timestamp": 1531245097000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 4: Code-Review-1\n\n(2 comments)"
          },
          {
            "timestamp": 1531245173000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 5."
          },
          {
            "timestamp": 1531245387000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/628/"
          },
          {
            "timestamp": 1531245526000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/628/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/628"
          },
          {
            "timestamp": 1531245554000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 5: Code-Review+2"
          },
          {
            "timestamp": 1531325687000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 6: Patch Set 5 was rebased."
          },
          {
            "timestamp": 1531325768000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/631/"
          },
          {
            "timestamp": 1531325915000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 6: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/631/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/631"
          },
          {
            "timestamp": 1531334147000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 6: Code-Review+1"
          },
          {
            "timestamp": 1531495845000,
            "reviewer": ids["agrimberg"],
            "message": "Patch Set 6: Code-Review+2"
          },
          {
            "timestamp": 1531495847000,
            "reviewer": ids["agrimberg"],
            "message": "Change has been successfully merged by Andrew Grimberg"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "224139b46a9e9c7143cbc610f42371dd217b389c",
            "parents": [
              "aec2a0c78d8ca2d4ea9570cc249bbe55b33643f3"
            ],
            "ref": "refs/changes/05/10705/1",
            "uploader": ids["agardner"],
            "createdOnDate": 1526587776000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1526596014000,
                "grantedBy": ids["bramwelt"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1526860683000,
                "grantedBy": ids["askb"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1526588159000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "/COMMIT_MSG",
                "line": 10,
                "reviewer": ids["zxiiro"],
                "message": "typo: global-jjb",
                "patchSetTimestamp": 1526587776000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 615,
                "reviewer": ids["zxiiro"],
                "message": "I believe this is regex so maybe we can do\n\n(recheck|reverify)$\n\nthat way if folks copy paste the regex they\u0027ll get both in the same call.",
                "patchSetTimestamp": 1526587776000
              },
              {
                "file": "jjb/lf-ci-jobs.yaml",
                "line": 615,
                "reviewer": ids["askb"],
                "message": "The verify jobs would be triggered resulting from the following comments:\n\n1. reverify\n2. recheck\n3. a comment line ending with reverify\n4. a comment line ending with recheck \n\nActual gerrit comment would look like:\n\n1. Patch Set 14: recheck\n2. Patch Set 15: reverify\n3. Patch Set 25: a comment line ending with reverify\n4. Patch Set 45: a comment line ending with recheck\n\nI tested the regex which handled all the about cases while it matches only for tests 1. and 2. So that only correct commands would retrigger the jobs.  \n\n^Patch Set[ ]+[0-9]+:([ ]+|[\\n]+)(recheck|reverify)$",
                "patchSetTimestamp": 1526587776000
              }
            ],
            "sizeInsertions": 18,
            "sizeDeletions": -6
          },
          {
            "number": 2,
            "revision": "cc4427298fe0ffca2cd5426432c36c8062f7cb6f",
            "parents": [
              "d0dddc7e5ea93df8e47b90bdf6afd2edfd966cb5"
            ],
            "ref": "refs/changes/05/10705/2",
            "uploader": ids["agardner"],
            "createdOnDate": 1529684819000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1529848497000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1529685287000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 483,
                "reviewer": ids["zxiiro"],
                "message": "I think this pattern might be easier to manage if we ever decide to add a 3rd option: ^(recheck|reverify)$",
                "patchSetTimestamp": 1529684819000
              },
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 922,
                "reviewer": ids["zxiiro"],
                "message": "missing trialing $",
                "patchSetTimestamp": 1529684819000
              },
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 1039,
                "reviewer": ids["agardner"],
                "message": "Hmm. what do I do for this one?",
                "patchSetTimestamp": 1529684819000
              },
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 1039,
                "reviewer": ids["zxiiro"],
                "message": "Probably:\n\n ^Patch Set[ ]+[0-9]+:([ ]+|[\\n]+)(recheck|reverify): [0-9 ]+",
                "patchSetTimestamp": 1529684819000
              }
            ],
            "sizeInsertions": 20,
            "sizeDeletions": -17
          },
          {
            "number": 3,
            "revision": "a879eb4b083807a8db60dbac45621c988bac6d6e",
            "parents": [
              "d0dddc7e5ea93df8e47b90bdf6afd2edfd966cb5"
            ],
            "ref": "refs/changes/05/10705/3",
            "uploader": ids["agardner"],
            "createdOnDate": 1530302729000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1530359807000,
                "grantedBy": ids["askb"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1530302973000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 20,
            "sizeDeletions": -17
          },
          {
            "number": 4,
            "revision": "d113e63c987519b0008aede3d1b7917e0ac9a227",
            "parents": [
              "5fbc7e5d91972c465b940e1ce0aa1e25d6b66e5e"
            ],
            "ref": "refs/changes/05/10705/4",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1530398819000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1531245097000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1531238824000,
                "grantedBy": ids["agardner"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1530399062000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "shell/gerrit-fetch-dependencies.sh",
                "line": 27,
                "reviewer": ids["zxiiro"],
                "message": "On modern Linux we don\u0027t need to use egrep.\n\nhttps://unix.stackexchange.com/questions/17949/what-is-the-difference-between-grep-egrep-and-fgrep\n\nI think this should just be `grep -E` instead.",
                "patchSetTimestamp": 1530398819000
              },
              {
                "file": "shell/gerrit-fetch-dependencies.sh",
                "line": 28,
                "reviewer": ids["zxiiro"],
                "message": "I thin",
                "patchSetTimestamp": 1530398819000
              }
            ],
            "sizeInsertions": 20,
            "sizeDeletions": -17
          },
          {
            "number": 5,
            "revision": "280b57b4c2980930b6145d42d75feae7b353583b",
            "parents": [
              "dfb2c6ca52a4c885e42d6c2252706bd824c75068"
            ],
            "ref": "refs/changes/05/10705/5",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1531245173000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1531245554000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1531245526000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 20,
            "sizeDeletions": -17
          },
          {
            "number": 6,
            "revision": "a97f48ea67f1bd469d25ae816d7ba66786ecd68a",
            "parents": [
              "8f930852bc197279a3904c59dc315928d269c7bb"
            ],
            "ref": "refs/changes/05/10705/6",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1531325687000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "TRIVIAL_REBASE",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1531495845000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1531495847000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1531334147000,
                "grantedBy": ids["agardner"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1531325915000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 20,
            "sizeDeletions": -17
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "/COMMIT_MSG",
          "line": 10,
          "reviewer": ids["zxiiro"],
          "message": "typo: global-jjb",
          "patchSetTimestamp": 1526587776000
        },
        {
          "file": "jjb/lf-ci-jobs.yaml",
          "line": 615,
          "reviewer": ids["zxiiro"],
          "message": "I believe this is regex so maybe we can do\n\n(recheck|reverify)$\n\nthat way if folks copy paste the regex they\u0027ll get both in the same call.",
          "patchSetTimestamp": 1526587776000
        },
        {
          "file": "jjb/lf-ci-jobs.yaml",
          "line": 615,
          "reviewer": ids["askb"],
          "message": "The verify jobs would be triggered resulting from the following comments:\n\n1. reverify\n2. recheck\n3. a comment line ending with reverify\n4. a comment line ending with recheck \n\nActual gerrit comment would look like:\n\n1. Patch Set 14: recheck\n2. Patch Set 15: reverify\n3. Patch Set 25: a comment line ending with reverify\n4. Patch Set 45: a comment line ending with recheck\n\nI tested the regex which handled all the about cases while it matches only for tests 1. and 2. So that only correct commands would retrigger the jobs.  \n\n^Patch Set[ ]+[0-9]+:([ ]+|[\\n]+)(recheck|reverify)$",
          "patchSetTimestamp": 1526587776000
        },
        {
          "file": "jjb/lf-maven-jobs.yaml",
          "line": 483,
          "reviewer": ids["zxiiro"],
          "message": "I think this pattern might be easier to manage if we ever decide to add a 3rd option: ^(recheck|reverify)$",
          "patchSetTimestamp": 1529684819000
        },
        {
          "file": "jjb/lf-maven-jobs.yaml",
          "line": 922,
          "reviewer": ids["zxiiro"],
          "message": "missing trialing $",
          "patchSetTimestamp": 1529684819000
        },
        {
          "file": "jjb/lf-maven-jobs.yaml",
          "line": 1039,
          "reviewer": ids["zxiiro"],
          "message": "Probably:\n\n ^Patch Set[ ]+[0-9]+:([ ]+|[\\n]+)(recheck|reverify): [0-9 ]+",
          "patchSetTimestamp": 1529684819000
        },
        {
          "file": "shell/gerrit-fetch-dependencies.sh",
          "line": 27,
          "reviewer": ids["zxiiro"],
          "message": "On modern Linux we don\u0027t need to use egrep.\n\nhttps://unix.stackexchange.com/questions/17949/what-is-the-difference-between-grep-egrep-and-fgrep\n\nI think this should just be `grep -E` instead.",
          "patchSetTimestamp": 1530398819000
        },
        {
          "file": "shell/gerrit-fetch-dependencies.sh",
          "line": 28,
          "reviewer": ids["zxiiro"],
          "message": "I thin",
          "patchSetTimestamp": 1530398819000
        }
      ]
    },
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "I1aa2f4a323fe9296bf9bfdc3a1d9043e32d24b8f",
        "commitNumber": 11532,
        "subject": "Make version string optional.",
        "owner": ids["agardner"],
        "url": "https://gerrit.linuxfoundation.org/infra/11532",
        "commitMessage": "Make version string optional.\n\nversions is not yet documented for INFO.yaml\nWe do not yet have version in OPNFV\u0027s INFO files.\n\nChange-Id: I1aa2f4a323fe9296bf9bfdc3a1d9043e32d24b8f\nSigned-off-by: Aric Gardner \u003cagardner@linuxfoundation.org\u003e\n",
        "createdOnDate": 1529699456000,
        "lastUpdatedDate": 1529709016000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["bramwelt"],
          ids["jwagantall"],
          ids["agrimberg"],
          ids["zxiiro"],
          ids["lf-jenkins"],
          ids["askb"]
        ],
        "comments": [
          {
            "timestamp": 1529699456000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1529699516000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1529699707000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/608/"
          },
          {
            "timestamp": 1529699772000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2: Code-Review+2"
          },
          {
            "timestamp": 1529699884000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/608/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/608"
          },
          {
            "timestamp": 1529700189000,
            "reviewer": ids["bramwelt"],
            "message": "Patch Set 2: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1529700552000,
            "reviewer": ids["agardner"],
            "message": "Uploaded patch set 3."
          },
          {
            "timestamp": 1529700628000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/609/"
          },
          {
            "timestamp": 1529700835000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/609/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/609"
          },
          {
            "timestamp": 1529700840000,
            "reviewer": ids["bramwelt"],
            "message": "Patch Set 3: Code-Review+2"
          },
          {
            "timestamp": 1529709005000,
            "reviewer": ids["askb"],
            "message": "Patch Set 3: Code-Review+2"
          },
          {
            "timestamp": 1529709016000,
            "reviewer": ids["askb"],
            "message": "Change has been successfully merged by Anil Belur"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "c57a833d9dd7b23f0e968d3c67745eccce6d58c8",
            "parents": [
              "d0dddc7e5ea93df8e47b90bdf6afd2edfd966cb5"
            ],
            "ref": "refs/changes/32/11532/1",
            "uploader": ids["agardner"],
            "createdOnDate": 1529699456000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 4,
            "sizeDeletions": -3
          },
          {
            "number": 2,
            "revision": "e4e13ba845e4e4f6a120da99b4002eaab75966d9",
            "parents": [
              "d0dddc7e5ea93df8e47b90bdf6afd2edfd966cb5"
            ],
            "ref": "refs/changes/32/11532/2",
            "uploader": ids["agardner"],
            "createdOnDate": 1529699516000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1529699772000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1529700189000,
                "grantedBy": ids["bramwelt"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1529699884000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "info-schema",
                "line": 34,
                "reviewer": ids["bramwelt"],
                "message": "These \u0027{\u0027 aren\u0027t needed, nor is \u0027required: false\u0027.\n\nJust removing \u0027version\u0027 from the required map above should be sufficient.",
                "patchSetTimestamp": 1529699516000
              }
            ],
            "sizeInsertions": 4,
            "sizeDeletions": -3
          },
          {
            "number": 3,
            "revision": "1df3ea4798123a8a0df734b8f78c62eae2bab9bf",
            "parents": [
              "d0dddc7e5ea93df8e47b90bdf6afd2edfd966cb5"
            ],
            "ref": "refs/changes/32/11532/3",
            "uploader": ids["agardner"],
            "createdOnDate": 1529700552000,
            "author": ids["agardner"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1529700840000,
                "grantedBy": ids["bramwelt"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1529709005000,
                "grantedBy": ids["askb"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1529709016000,
                "grantedBy": ids["askb"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1529700835000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 0,
            "sizeDeletions": -1
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "info-schema",
          "line": 34,
          "reviewer": ids["bramwelt"],
          "message": "These \u0027{\u0027 aren\u0027t needed, nor is \u0027required: false\u0027.\n\nJust removing \u0027version\u0027 from the required map above should be sufficient.",
          "patchSetTimestamp": 1529699516000
        }
      ]
    }
  ],
  "reviewersForOwnCommits": [
    {
      "identity": ids["askb"],
      "approvalData": {
        "addedAsReviewerCount": 4,
        "approvalCount": 3,
        "commentCount": 6,
        "approvals": {
          "-1": 1,
          "2": 2
        }
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
        "addedAsReviewerCount": 5,
        "approvalCount": 12,
        "commentCount": 75,
        "approvals": {
          "-1": 9,
          "2": 3
        }
      }
    },
    {
      "identity": ids["lf-jenkins"],
      "approvalData": {
        "addedAsReviewerCount": 5,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    },
    {
      "identity": ids["bramwelt"],
      "approvalData": {
        "addedAsReviewerCount": 4,
        "approvalCount": 3,
        "commentCount": 2,
        "approvals": {
          "-1": 1,
          "2": 2
        }
      }
    },
    {
      "identity": ids["agrimberg"],
      "approvalData": {
        "addedAsReviewerCount": 5,
        "approvalCount": 4,
        "commentCount": 4,
        "approvals": {
          "-1": 2,
          "1": 1,
          "2": 1
        }
      }
    },
    {
      "identity": ids["jwagantall"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    }
  ],
  "repositories": {
    "releng/lftools": {
      "name": "releng/lftools",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/lftools",
      "reviewRequestors": [
        {
          "identity": ids["askb"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 5,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 3
    },
    "releng/global-jjb": {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [
        {
          "identity": ids["jwagantall"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 1,
            "approvals": {}
          }
        },
        {
          "identity": ids["valderrv"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 2,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 2
    }
  },
  "averageTimeInCodeReview": 4031644400,
  "abandonedCommitCount": 1,
  "projects": [
    {
      "name": "releng/lftools",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/lftools",
      "reviewRequestors": [
        {
          "identity": ids["askb"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 5,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 3
    },
    {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [
        {
          "identity": ids["jwagantall"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 1,
            "approvals": {}
          }
        },
        {
          "identity": ids["valderrv"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 2,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 2
    }
  ],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 1
};
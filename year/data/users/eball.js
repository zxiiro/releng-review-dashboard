userdata['eball'] = {
  "identity": ids["eball"],
  "reviewCountPlus2": 1,
  "reviewCountPlus1": 1,
  "reviewCountMinus1": 0,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1536862686000,
  "lastActiveDate": 1536884284000,
  "activeDayCount": 1,
  "commits": [
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I759297ed9f49566df6062b2a158e0954673e29eb",
      "commitNumber": 12581,
      "subject": "Add docker list/delete subcommands for nexus",
      "owner": ids["eball"],
      "url": "https://gerrit.linuxfoundation.org/infra/12581",
      "commitMessage": "Add docker list/delete subcommands for nexus\n\nThis commit adds a \"docker\" subcommand to \"nexus\", with options to\nlist or delete images. This is intended for docker repos in Nexus 3.\n\nAlso includes logic in the Nexus class to find the version and\ncorrect API base path from the provided URL.\n\nIssue-ID: RELENG-1164\nChange-Id: I759297ed9f49566df6062b2a158e0954673e29eb\nSigned-off-by: Eric Ball \u003ceball@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536862686000,
      "lastUpdatedDate": 1536884284000,
      "isOpen": true,
      "status": "NEW",
      "reviewers": [
        ids["lf-jenkins"],
        ids["eball"],
        ids["zxiiro"]
      ],
      "comments": [
        {
          "timestamp": 1536862686000,
          "reviewer": ids["eball"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536862838000,
          "reviewer": ids["eball"],
          "message": "Patch Set 1:\n\nGot ahead of myself here somewhat. There are a few more modifications to the lftools base that need to be made to ensure proper installation."
        },
        {
          "timestamp": 1536862930000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/343/"
        },
        {
          "timestamp": 1536863159000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/343/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/343/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/343"
        },
        {
          "timestamp": 1536869885000,
          "reviewer": ids["eball"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1536870075000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/345/"
        },
        {
          "timestamp": 1536870079000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\nWhat images are these? docker images?\n\nIf so the command should be more clear. eg.\n\n lftools nexus docker search\n lftools nexus docker list\n\netc...."
        },
        {
          "timestamp": 1536870361000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/345/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/345/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/345"
        },
        {
          "timestamp": 1536882420000,
          "reviewer": ids["eball"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1536882583000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/350/"
        },
        {
          "timestamp": 1536882871000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/350/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/350/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/350"
        },
        {
          "timestamp": 1536883869000,
          "reviewer": ids["eball"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1536884015000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/351/"
        },
        {
          "timestamp": 1536884284000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/351/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/351/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/351"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "ae28dc6ed5a50b3013aa1c35e118d9731f8bbd5e",
          "parents": [
            "bf6ca83a3f20a15dd83800f3953cc3f5e449250b"
          ],
          "ref": "refs/changes/81/12581/1",
          "uploader": ids["eball"],
          "createdOnDate": 1536862686000,
          "author": ids["eball"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1536863159000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 195,
          "sizeDeletions": -11
        },
        {
          "number": 2,
          "revision": "2d22cd86ae2c58f4db34b415a2907813140bf89c",
          "parents": [
            "bf6ca83a3f20a15dd83800f3953cc3f5e449250b"
          ],
          "ref": "refs/changes/81/12581/2",
          "uploader": ids["eball"],
          "createdOnDate": 1536869885000,
          "author": ids["eball"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1536870361000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 205,
          "sizeDeletions": -18
        },
        {
          "number": 3,
          "revision": "5c5fc198f99b8194ad8eeb43cabe4c5c23f8bd44",
          "parents": [
            "f941b0fb316f199a6409e8ccf6fcdc4e61092445"
          ],
          "ref": "refs/changes/81/12581/3",
          "uploader": ids["eball"],
          "createdOnDate": 1536882420000,
          "author": ids["eball"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1536882871000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 209,
          "sizeDeletions": -18
        },
        {
          "number": 4,
          "revision": "1057e1d0a6b61aed2ecc11a1a8e471d0f772d586",
          "parents": [
            "f941b0fb316f199a6409e8ccf6fcdc4e61092445"
          ],
          "ref": "refs/changes/81/12581/4",
          "uploader": ids["eball"],
          "createdOnDate": 1536883869000,
          "author": ids["eball"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1536884284000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 209,
          "sizeDeletions": -18
        }
      ]
    }
  ],
  "addedAsReviewerTo": [
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I45a0a66dfaaf517cdc5d85fc15f60e403bccfeb9",
      "commitNumber": 11927,
      "subject": "Add utility to check repos for commits missing DCO",
      "owner": ids["jeremyphelps"],
      "url": "https://gerrit.linuxfoundation.org/infra/11927",
      "commitMessage": "Add utility to check repos for commits missing DCO\n\nThis only works on git repositories.\n\nChange-Id: I45a0a66dfaaf517cdc5d85fc15f60e403bccfeb9\nCo-Authored-By: Eric Ball \u003ceball@linuxfoundation.org\u003e\nCo-Authored-By: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\nSigned-off-by: Jeremy Phelps \u003cjphelps@linuxfoundation.org\u003e\n",
      "createdOnDate": 1532372693000,
      "lastUpdatedDate": 1532797533000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["jwagantall"],
        ids["agrimberg"],
        ids["zxiiro"],
        ids["jeremyphelps"],
        ids["eball"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1532372693000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1532372922000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1532373083000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1532374231000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 2:\n\nI still need to add in the check all branches feature."
        },
        {
          "timestamp": 1532377677000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 2: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1532379031000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review-1\n\n(8 comments)"
        },
        {
          "timestamp": 1532536355000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1532536386000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 3:\n\n(6 comments)"
        },
        {
          "timestamp": 1532536489000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/202/ (1/2)"
        },
        {
          "timestamp": 1532536527000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/21/ (2/2)"
        },
        {
          "timestamp": 1532536678000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/202/ : FAILURE\n\nThe commit message shortlog (1st line in commit message) is too long. It should be 50 characters or less in length. Please update the commit message as necessary to pass this check. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/202/ )\n\nFile lftools/cli/dco.py is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/202/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/202\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/21/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/21/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/21"
        },
        {
          "timestamp": 1532538166000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 3: Code-Review-1\n\n(3 comments)"
        },
        {
          "timestamp": 1532543007000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 3:\n\n(3 comments)"
        },
        {
          "timestamp": 1532543116000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1532543205000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/203/ (1/2)"
        },
        {
          "timestamp": 1532543250000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/22/ (2/2)"
        },
        {
          "timestamp": 1532543361000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/203/ : FAILURE\n\nFile lftools/cli/dco.py is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/203/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/203\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/22/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/22/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/22"
        },
        {
          "timestamp": 1532543908000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review-1\n\n(2 comments)"
        },
        {
          "timestamp": 1532543955000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1532544048000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/204/ (1/2)"
        },
        {
          "timestamp": 1532544084000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/23/ (2/2)"
        },
        {
          "timestamp": 1532544266000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/204/ : FAILURE\n\nFile shell/dco is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/204/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/204\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/23/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/23/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/23"
        },
        {
          "timestamp": 1532544403000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 6."
        },
        {
          "timestamp": 1532544539000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/205/ (1/2)"
        },
        {
          "timestamp": 1532544596000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/24/ (2/2)"
        },
        {
          "timestamp": 1532544597000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 4:\n\n(2 comments)"
        },
        {
          "timestamp": 1532544612000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 7."
        },
        {
          "timestamp": 1532544640000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/205/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/205/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/205\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/24/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/24/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/24"
        },
        {
          "timestamp": 1532544710000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/206/ (1/2)"
        },
        {
          "timestamp": 1532544756000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/25/ (2/2)"
        },
        {
          "timestamp": 1532544919000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/206/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/206/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/206\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/25/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/25/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/25"
        },
        {
          "timestamp": 1532544948000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 7: Code-Review-1\n\n(1 comment)\n\nWe should be exiting with a code 1 if we have any ERRORs reported."
        },
        {
          "timestamp": 1532545088000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 7:\n\n(1 comment)"
        },
        {
          "timestamp": 1532545435000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 8."
        },
        {
          "timestamp": 1532545556000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/207/ (1/2)"
        },
        {
          "timestamp": 1532545613000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/26/ (2/2)"
        },
        {
          "timestamp": 1532545763000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/207/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/207/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/207\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/26/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/26/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/26"
        },
        {
          "timestamp": 1532547050000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 9."
        },
        {
          "timestamp": 1532547177000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/208/ (1/2)"
        },
        {
          "timestamp": 1532547225000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/27/ (2/2)"
        },
        {
          "timestamp": 1532547380000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/208/ : FAILURE\n\nFile lftools/cli/dco.py is missing or has an incorrect license header. Verify that the file has one of the project supported licenses properly identified in the header. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/208/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/208\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/27/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/27/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/27"
        },
        {
          "timestamp": 1532547731000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 10."
        },
        {
          "timestamp": 1532547853000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/209/ (1/2)"
        },
        {
          "timestamp": 1532547903000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/28/ (2/2)"
        },
        {
          "timestamp": 1532548048000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 10: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/209/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/209/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/209\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/28/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/28/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/28"
        },
        {
          "timestamp": 1532548077000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 11."
        },
        {
          "timestamp": 1532548187000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 11:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/210/ (1/2)"
        },
        {
          "timestamp": 1532548238000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 11:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/29/ (2/2)"
        },
        {
          "timestamp": 1532548403000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 11: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/210/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/210/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/210\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/29/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/29/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/29"
        },
        {
          "timestamp": 1532549003000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 12."
        },
        {
          "timestamp": 1532549133000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 12:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/211/ (1/2)"
        },
        {
          "timestamp": 1532549190000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 12:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/30/ (2/2)"
        },
        {
          "timestamp": 1532549305000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 12: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/211/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/211\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/30/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/30"
        },
        {
          "timestamp": 1532566215000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 12: Code-Review-1\n\n(4 comments)\n\nSome minor things. I\u0027ll patch it up shortly."
        },
        {
          "timestamp": 1532566559000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 13."
        },
        {
          "timestamp": 1532566650000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 13:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/212/ (1/2)"
        },
        {
          "timestamp": 1532566673000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 13: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1532566684000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 13:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/31/ (2/2)"
        },
        {
          "timestamp": 1532566887000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 13: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/212/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/212\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/31/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/31"
        },
        {
          "timestamp": 1532616913000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 13:\n\n\u003e (1 comment)\n\nAh this is the issue I was thinking about the other day.  $(git branch) expands to include the files and folders in the git dir too."
        },
        {
          "timestamp": 1532617303000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 13:\n\nI don\u0027t think it returns files/dirs only branches. However there are a few issues that should be addressed.\n\n1. git branch needs to be trimmed because it\u0027s output has leading whitespace.\n2. git branch also prefixes a \u0027*\u0027 next to the active branch (which is why there is leading whitespace in the output\n3. we need to parse the output into an array (use advice from ShellCheck here https://github.com/koalaman/shellcheck/wiki/SC2207)\n\nI think we really want `git branch -r` here though."
        },
        {
          "timestamp": 1532617605000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 14."
        },
        {
          "timestamp": 1532617828000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 14:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/32/ (2/2)"
        },
        {
          "timestamp": 1532617828000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 14:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/214/ (1/2)"
        },
        {
          "timestamp": 1532617985000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 14: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/214/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/214\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/32/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/32"
        },
        {
          "timestamp": 1532618452000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 14: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1532629073000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 15."
        },
        {
          "timestamp": 1532629147000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 16."
        },
        {
          "timestamp": 1532629205000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 16:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/215/ (1/2)"
        },
        {
          "timestamp": 1532629231000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 14:\n\n\u003e (1 comment)\n\nah I got the changes but let me make a few more"
        },
        {
          "timestamp": 1532629256000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 16:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/33/ (2/2)"
        },
        {
          "timestamp": 1532629394000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 16: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/215/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/215\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/33/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/33"
        },
        {
          "timestamp": 1532629405000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 17."
        },
        {
          "timestamp": 1532629444000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 18."
        },
        {
          "timestamp": 1532629556000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 18:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/216/ (1/2)"
        },
        {
          "timestamp": 1532629582000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 18:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/34/ (2/2)"
        },
        {
          "timestamp": 1532629766000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 18: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/216/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/216\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/34/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/34"
        },
        {
          "timestamp": 1532704526000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 18: Code-Review-1\n\n(6 comments)"
        },
        {
          "timestamp": 1532704666000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 18:\n\n(1 comment)"
        },
        {
          "timestamp": 1532704763000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 18:\n\n(1 comment)"
        },
        {
          "timestamp": 1532707051000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 19."
        },
        {
          "timestamp": 1532707079000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 18:\n\n(4 comments)"
        },
        {
          "timestamp": 1532707179000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 19:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/220/ (1/2)"
        },
        {
          "timestamp": 1532707231000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 19:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/35/ (2/2)"
        },
        {
          "timestamp": 1532707415000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 19: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/220/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/220/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/220\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/35/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/35"
        },
        {
          "timestamp": 1532707459000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 20."
        },
        {
          "timestamp": 1532707573000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 20:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/221/ (1/2)"
        },
        {
          "timestamp": 1532707617000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 20:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/36/ (2/2)"
        },
        {
          "timestamp": 1532707822000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 20: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/221/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/221/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/221\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/36/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/36"
        },
        {
          "timestamp": 1532708228000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 21."
        },
        {
          "timestamp": 1532708347000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 21:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/222/ (1/2)"
        },
        {
          "timestamp": 1532708407000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 21:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/37/ (2/2)"
        },
        {
          "timestamp": 1532708543000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 21: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/222/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/222\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/37/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/37"
        },
        {
          "timestamp": 1532714799000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 21: Code-Review-1\n\n(4 comments)\n\nWhen I run it I get this error:\n\n$ lftools dco check\n/home/zxiiro/.virtualenvs/lftools/bin/dco: line 17: cd: repo_path: No such file or directory\nThere is an issue with the patch"
        },
        {
          "timestamp": 1532715782000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 21:\n\n(4 comments)"
        },
        {
          "timestamp": 1532716000000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 22."
        },
        {
          "timestamp": 1532716134000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 22:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/223/ (1/2)"
        },
        {
          "timestamp": 1532716185000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 22:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/38/ (2/2)"
        },
        {
          "timestamp": 1532716313000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 22: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/223/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/223\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/38/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/38"
        },
        {
          "timestamp": 1532716378000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 23."
        },
        {
          "timestamp": 1532716511000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 23:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/224/ (1/2)"
        },
        {
          "timestamp": 1532716537000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 23: Code-Review-1\n\n(3 comments)"
        },
        {
          "timestamp": 1532716556000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 23:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/39/ (2/2)"
        },
        {
          "timestamp": 1532716727000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 23: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/224/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/224/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/224\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/39/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/39"
        },
        {
          "timestamp": 1532716790000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 24."
        },
        {
          "timestamp": 1532716942000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 24:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/225/ (1/2)"
        },
        {
          "timestamp": 1532716975000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 24:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/40/ (2/2)"
        },
        {
          "timestamp": 1532717091000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 24:\n\n(1 comment)"
        },
        {
          "timestamp": 1532717145000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 24: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/225/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/225/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/225\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/40/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/40"
        },
        {
          "timestamp": 1532717282000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 25."
        },
        {
          "timestamp": 1532717332000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 25: Code-Review+2"
        },
        {
          "timestamp": 1532717426000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 25:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/226/ (1/2)"
        },
        {
          "timestamp": 1532717572000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 25:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/41/ (2/2)"
        },
        {
          "timestamp": 1532717660000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 25: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/226/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/226\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/41/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/41"
        },
        {
          "timestamp": 1532797533000,
          "reviewer": ids["jeremyphelps"],
          "message": "Change has been successfully merged by Jeremy Phelps"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "7fd5367800cfcecda000760d677cb52a54963c0d",
          "parents": [
            "4a923812ad17355d18955f909db2301cf56774c4"
          ],
          "ref": "refs/changes/27/11927/1",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532372693000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1532372922000,
              "grantedBy": ids["jwagantall"]
            }
          ],
          "comments": [
            {
              "file": "lftools/cli/dco.py",
              "line": 31,
              "reviewer": ids["jwagantall"],
              "message": "trailing spaces",
              "patchSetTimestamp": 1532372693000
            }
          ],
          "sizeInsertions": 73,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "487afca320851db27ada5bb04cba9536dda56343",
          "parents": [
            "4a923812ad17355d18955f909db2301cf56774c4"
          ],
          "ref": "refs/changes/27/11927/2",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532373083000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1532377677000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1532379031000,
              "grantedBy": ids["zxiiro"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 9,
              "reviewer": ids["zxiiro"],
              "message": "Co-Authored-By: Eric Ball \u003ceball@linuxfoundation.org\u003e\nCo-Authored-By: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e",
              "patchSetTimestamp": 1532373083000
            },
            {
              "file": "/COMMIT_MSG",
              "line": 9,
              "reviewer": ids["jeremyphelps"],
              "message": "Done",
              "patchSetTimestamp": 1532373083000
            },
            {
              "file": "lftools/cli/dco.py",
              "line": 10,
              "reviewer": ids["zxiiro"],
              "message": "commits missing DCO.\n\nAnd then link to https://developercertificate.org/ in the body of the pydoc.",
              "patchSetTimestamp": 1532373083000
            },
            {
              "file": "lftools/cli/dco.py",
              "line": 30,
              "reviewer": ids["zxiiro"],
              "message": "commits missing DCO.",
              "patchSetTimestamp": 1532373083000
            },
            {
              "file": "lftools/cli/dco.py",
              "line": 33,
              "reviewer": ids["zxiiro"],
              "message": "add: Refer to https://developercertificate.org/",
              "patchSetTimestamp": 1532373083000
            },
            {
              "file": "shell/dco",
              "line": 4,
              "reviewer": ids["zxiiro"],
              "message": "Should only be 2018",
              "patchSetTimestamp": 1532373083000
            },
            {
              "file": "shell/dco",
              "line": 4,
              "reviewer": ids["jeremyphelps"],
              "message": "Done",
              "patchSetTimestamp": 1532373083000
            },
            {
              "file": "shell/dco",
              "line": 23,
              "reviewer": ids["zxiiro"],
              "message": "as far as I can tell the function below accepts no arguments.",
              "patchSetTimestamp": 1532373083000
            },
            {
              "file": "shell/dco",
              "line": 23,
              "reviewer": ids["jeremyphelps"],
              "message": "Done",
              "patchSetTimestamp": 1532373083000
            },
            {
              "file": "shell/dco",
              "line": 31,
              "reviewer": ids["zxiiro"],
              "message": "actually why even complicate this, just have lftools call check_dco() directly below.",
              "patchSetTimestamp": 1532373083000
            },
            {
              "file": "shell/dco",
              "line": 31,
              "reviewer": ids["jeremyphelps"],
              "message": "Done",
              "patchSetTimestamp": 1532373083000
            },
            {
              "file": "shell/dco",
              "line": 34,
              "reviewer": ids["agrimberg"],
              "message": "Please break this onto multiple lines. It\u0027s longer than it should be",
              "patchSetTimestamp": 1532373083000
            },
            {
              "file": "shell/dco",
              "line": 34,
              "reviewer": ids["jeremyphelps"],
              "message": "Done",
              "patchSetTimestamp": 1532373083000
            },
            {
              "file": "shell/dco",
              "line": 35,
              "reviewer": ids["zxiiro"],
              "message": "\u0027missing Signed-off-by line.\u0027\n\nI think makes it a little more clear. \"not signed\" could also mean gpg so.",
              "patchSetTimestamp": 1532373083000
            },
            {
              "file": "shell/dco",
              "line": 35,
              "reviewer": ids["jeremyphelps"],
              "message": "Done",
              "patchSetTimestamp": 1532373083000
            }
          ],
          "sizeInsertions": 73,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "4d790e809a9fdee7a7837eb9e3d08934eda8945a",
          "parents": [
            "4a923812ad17355d18955f909db2301cf56774c4"
          ],
          "ref": "refs/changes/27/11927/3",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532536355000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1532538166000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1532536678000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "docs/commands/dco.rst",
              "line": 16,
              "reviewer": ids["agrimberg"],
              "message": "Dangling white space",
              "patchSetTimestamp": 1532536355000
            },
            {
              "file": "docs/commands/dco.rst",
              "line": 16,
              "reviewer": ids["jeremyphelps"],
              "message": "Done",
              "patchSetTimestamp": 1532536355000
            },
            {
              "file": "lftools/cli/dco.py",
              "line": 33,
              "reviewer": ids["agrimberg"],
              "message": "Given that the script currently does not switch directories or clone repositories the help text should state that it operates on the current in the current directory which must be a git repository.",
              "patchSetTimestamp": 1532536355000
            },
            {
              "file": "lftools/cli/dco.py",
              "line": 33,
              "reviewer": ids["jeremyphelps"],
              "message": "Done",
              "patchSetTimestamp": 1532536355000
            },
            {
              "file": "shell/dco",
              "line": 13,
              "reviewer": ids["agrimberg"],
              "message": "This states that it checks out a repo determined by repository_url but there is nothing being done with a \u0027repository_url\u0027 variable.",
              "patchSetTimestamp": 1532536355000
            },
            {
              "file": "shell/dco",
              "line": 13,
              "reviewer": ids["jeremyphelps"],
              "message": "Done",
              "patchSetTimestamp": 1532536355000
            }
          ],
          "sizeInsertions": 82,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "820ecbf63a03eeadeda83795c31aacff1d7e1ce2",
          "parents": [
            "4a923812ad17355d18955f909db2301cf56774c4"
          ],
          "ref": "refs/changes/27/11927/4",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532543116000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1532543908000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1532543361000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "docs/commands/dco.rst",
              "line": 16,
              "reviewer": ids["zxiiro"],
              "message": "are missing DCOs (Signed-off-by line).",
              "patchSetTimestamp": 1532543116000
            },
            {
              "file": "docs/commands/dco.rst",
              "line": 16,
              "reviewer": ids["jeremyphelps"],
              "message": "Done",
              "patchSetTimestamp": 1532543116000
            },
            {
              "file": "lftools/cli/dco.py",
              "line": 36,
              "reviewer": ids["zxiiro"],
              "message": "Needs to match the name of the shell script.",
              "patchSetTimestamp": 1532543116000
            },
            {
              "file": "lftools/cli/dco.py",
              "line": 36,
              "reviewer": ids["jeremyphelps"],
              "message": "Done",
              "patchSetTimestamp": 1532543116000
            }
          ],
          "sizeInsertions": 84,
          "sizeDeletions": 0
        },
        {
          "number": 5,
          "revision": "15dfe6c705328e555ed3b8c370fc2a1b82652f94",
          "parents": [
            "4a923812ad17355d18955f909db2301cf56774c4"
          ],
          "ref": "refs/changes/27/11927/5",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532543955000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1532544266000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 86,
          "sizeDeletions": 0
        },
        {
          "number": 6,
          "revision": "a93039a245cb17f1ce8b24d5766793251abbaf86",
          "parents": [
            "4a923812ad17355d18955f909db2301cf56774c4"
          ],
          "ref": "refs/changes/27/11927/6",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532544403000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1532544640000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 85,
          "sizeDeletions": 0
        },
        {
          "number": 7,
          "revision": "53f92b242ff0858cd05ea58862fb452a91d7fa7e",
          "parents": [
            "4a923812ad17355d18955f909db2301cf56774c4"
          ],
          "ref": "refs/changes/27/11927/7",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532544612000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1532544948000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1532544919000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/dco",
              "line": 25,
              "reviewer": ids["agrimberg"],
              "message": "We should have an exit code 1 if there are any ERRORs that get printed. We should still print all ERRORs first and not exit on the first one.",
              "patchSetTimestamp": 1532544612000
            },
            {
              "file": "shell/dco",
              "line": 25,
              "reviewer": ids["jeremyphelps"],
              "message": "Ok lemme fix that up",
              "patchSetTimestamp": 1532544612000
            }
          ],
          "sizeInsertions": 85,
          "sizeDeletions": 0
        },
        {
          "number": 8,
          "revision": "787db5a62a2c7e27c232c1bb10ceaaa14f683fa4",
          "parents": [
            "4a923812ad17355d18955f909db2301cf56774c4"
          ],
          "ref": "refs/changes/27/11927/8",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532545435000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1532545763000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 87,
          "sizeDeletions": 0
        },
        {
          "number": 9,
          "revision": "a399966c44d36a73a673769b05403eae3110e0d1",
          "parents": [
            "4a923812ad17355d18955f909db2301cf56774c4"
          ],
          "ref": "refs/changes/27/11927/9",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532547050000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1532547380000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 92,
          "sizeDeletions": 0
        },
        {
          "number": 10,
          "revision": "57c468bbc6a18a7f40b0517658ce36cc3b0126df",
          "parents": [
            "4a923812ad17355d18955f909db2301cf56774c4"
          ],
          "ref": "refs/changes/27/11927/10",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532547731000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1532548048000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 87,
          "sizeDeletions": 0
        },
        {
          "number": 11,
          "revision": "c81b8998169753bc3f2e98b6b325f57a94f00dea",
          "parents": [
            "4a923812ad17355d18955f909db2301cf56774c4"
          ],
          "ref": "refs/changes/27/11927/11",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532548077000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1532548403000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 88,
          "sizeDeletions": 0
        },
        {
          "number": 12,
          "revision": "a815bef8de16eda8e296195ffae7792d4fc160f5",
          "parents": [
            "4a923812ad17355d18955f909db2301cf56774c4"
          ],
          "ref": "refs/changes/27/11927/12",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532549003000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1532566215000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1532549305000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "docs/commands/dco.rst",
              "line": 3,
              "reviewer": ids["zxiiro"],
              "message": "Our style guide says to use ####### for chapter headings. Also only 3 length is needed.",
              "patchSetTimestamp": 1532549003000
            },
            {
              "file": "setup.py",
              "line": 61,
              "reviewer": ids["zxiiro"],
              "message": "Alphabetical order.",
              "patchSetTimestamp": 1532549003000
            },
            {
              "file": "shell/dco",
              "line": 26,
              "reviewer": ids["zxiiro"],
              "message": "Should do some indenting here so that it\u0027s clear when we\u0027re in the loop.",
              "patchSetTimestamp": 1532549003000
            },
            {
              "file": "shell/dco",
              "line": 28,
              "reviewer": ids["zxiiro"],
              "message": "Double quote to prevent word splitting.",
              "patchSetTimestamp": 1532549003000
            }
          ],
          "sizeInsertions": 88,
          "sizeDeletions": 0
        },
        {
          "number": 13,
          "revision": "330313a85baf0112c1ba6d5b03936caf1fcbb6bf",
          "parents": [
            "4a923812ad17355d18955f909db2301cf56774c4"
          ],
          "ref": "refs/changes/27/11927/13",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1532566559000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1532566673000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1532566887000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/dco",
              "line": 16,
              "reviewer": ids["zxiiro"],
              "message": "This only checks local branches. Which for a freshly cloned  git repo is only \"master\".\n\nI think we want to check all remote branches right?\n\nAlso when I ran this on my local system I get the following error:\n\nerror: pathspec \u0027  deploy-archives\n  docs\n  gitignore\n  license\n  master\n  review/andrew_grimberg/nexus_config\n  review/andrew_grimberg/project_builder\n  review/anil_shashikumar_belur/5696\n  review/anil_shashikumar_belur/del-stale-nodes\n  review/anil_shashikumar_belur/deploy-arifacts\n  review/anil_shashikumar_belur/mvn-opts\n  review/anil_shashikumar_belur/releng-160\n  review/anil_shashikumar_belur/sysinfo-update\n  review/aric_gardner/11558\n  review/aric_gardner/6857\n* review/jeremy_phelps/add_dco_check\n  review/jeremy_phelps/doc_install\n  review/jessica_wagantall/5665\n  review/jessica_wagantall/5666\n  review/jessica_wagantall/yamllint\n  review/ry_jones/6813\n  review/thanh_ha/10273\n  review/thanh_ha/11157\n  review/thanh_ha/11776\n  review/thanh_ha/3262\n  review/thanh_ha/3612\n  review/thanh_ha/3635\n  review/thanh_ha/3961\n  review/thanh_ha/5055\n  review/thanh_ha/5343\n  review/thanh_ha/5522\n  review/thanh_ha/5612\n  review/thanh_ha/5663\n  review/thanh_ha/5733\n  review/thanh_ha/5748\n  review/thanh_ha/6050\n  review/thanh_ha/6123\n  review/thanh_ha/6879\n  review/thanh_ha/9855\n  review/thanh_ha/docs\n  review/thanh_ha/jenkins-admin-scripts\n  review/thanh_ha/license\n  review/trevor_bramwell/4866\n  trailing-slash\n  v0.13.x\n  v0.9.x\u0027 did not match any file(s) known to git.\nChecking commits in branch   deploy-archives\n  docs\n  gitignore\n  license\n  master\n  review/andrew_grimberg/nexus_config\n  review/andrew_grimberg/project_builder\n  review/anil_shashikumar_belur/5696\n  review/anil_shashikumar_belur/del-stale-nodes\n  review/anil_shashikumar_belur/deploy-arifacts\n  review/anil_shashikumar_belur/mvn-opts\n  review/anil_shashikumar_belur/releng-160\n  review/anil_shashikumar_belur/sysinfo-update\n  review/aric_gardner/11558\n  review/aric_gardner/6857\n* review/jeremy_phelps/add_dco_check\n  review/jeremy_phelps/doc_install\n  review/jessica_wagantall/5665\n  review/jessica_wagantall/5666\n  review/jessica_wagantall/yamllint\n  review/ry_jones/6813\n  review/thanh_ha/10273\n  review/thanh_ha/11157\n  review/thanh_ha/11776\n  review/thanh_ha/3262\n  review/thanh_ha/3612\n  review/thanh_ha/3635\n  review/thanh_ha/3961\n  review/thanh_ha/5055\n  review/thanh_ha/5343\n  review/thanh_ha/5522\n  review/thanh_ha/5612\n  review/thanh_ha/5663\n  review/thanh_ha/5733\n  review/thanh_ha/5748\n  review/thanh_ha/6050\n  review/thanh_ha/6123\n  review/thanh_ha/6879\n  review/thanh_ha/9855\n  review/thanh_ha/docs\n  review/thanh_ha/jenkins-admin-scripts\n  review/thanh_ha/license\n  review/trevor_bramwell/4866\n  trailing-slash\n  v0.13.x\n  v0.9.x for commits missing DCO...",
              "patchSetTimestamp": 1532566559000
            }
          ],
          "sizeInsertions": 90,
          "sizeDeletions": 0
        },
        {
          "number": 14,
          "revision": "41e6c92db847ab123388546e4ba4cb3435b80ea7",
          "parents": [
            "4a923812ad17355d18955f909db2301cf56774c4"
          ],
          "ref": "refs/changes/27/11927/14",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532617605000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1532618452000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1532617985000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/dco",
              "line": 17,
              "reviewer": ids["zxiiro"],
              "message": "We cannot do this as it does not make a proper array or trim the whitespace.\n\nUse the method from ShellCheck here. \n\nhttps://github.com/koalaman/shellcheck/wiki/SC2207\n\nAlso we should ignore origin/HEAD so maybe:\n\n git branch -r | grep -v origin/HEAD",
              "patchSetTimestamp": 1532617605000
            }
          ],
          "sizeInsertions": 88,
          "sizeDeletions": 0
        },
        {
          "number": 15,
          "revision": "2b6bf2cf27d88d5f4fd1d8852fd2e012004636df",
          "parents": [
            "4a923812ad17355d18955f909db2301cf56774c4"
          ],
          "ref": "refs/changes/27/11927/15",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532629073000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 97,
          "sizeDeletions": 0
        },
        {
          "number": 16,
          "revision": "fa73a9c8b617d2a076240fcbf676a0c6a22af295",
          "parents": [
            "4a923812ad17355d18955f909db2301cf56774c4"
          ],
          "ref": "refs/changes/27/11927/16",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532629147000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1532629394000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 96,
          "sizeDeletions": 0
        },
        {
          "number": 17,
          "revision": "4c4cda782360d3b98ed955eb7c771b876401b325",
          "parents": [
            "4a923812ad17355d18955f909db2301cf56774c4"
          ],
          "ref": "refs/changes/27/11927/17",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532629405000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 96,
          "sizeDeletions": 0
        },
        {
          "number": 18,
          "revision": "4d1f6df89f57d6a7dd12e5bb1dfb752258e8346d",
          "parents": [
            "4a923812ad17355d18955f909db2301cf56774c4"
          ],
          "ref": "refs/changes/27/11927/18",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532629444000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1532704526000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1532629766000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "lftools/cli/dco.py",
              "line": 27,
              "reviewer": ids["zxiiro"],
              "message": "This should have an argument with required\u003dFalse.\n\nBy default the argument should be \u0027.\u0027 for the current working directory. But if the user passes /path/to/repo it will scan that path instead.",
              "patchSetTimestamp": 1532629444000
            },
            {
              "file": "shell/dco",
              "line": 14,
              "reviewer": ids["zxiiro"],
              "message": "Add support for the user passing the path to a repo to scan.",
              "patchSetTimestamp": 1532629444000
            },
            {
              "file": "shell/dco",
              "line": 14,
              "reviewer": ids["jeremyphelps"],
              "message": "Working this out",
              "patchSetTimestamp": 1532629444000
            },
            {
              "file": "shell/dco",
              "line": 23,
              "reviewer": ids["zxiiro"],
              "message": "What\u0027s the point of this xargs?",
              "patchSetTimestamp": 1532629444000
            },
            {
              "file": "shell/dco",
              "line": 23,
              "reviewer": ids["jeremyphelps"],
              "message": "flag-less xargs strips space of the beginning and end no?",
              "patchSetTimestamp": 1532629444000
            },
            {
              "file": "shell/dco",
              "line": 23,
              "reviewer": ids["zxiiro"],
              "message": "Oh interesting. I didn\u0027t know that.",
              "patchSetTimestamp": 1532629444000
            },
            {
              "file": "shell/dco",
              "line": 24,
              "reviewer": ids["zxiiro"],
              "message": "I don\u0027t like that this modifies my local environment. We could make it less intrusive by adding the branch directly to the git log command.\n\ngit log \"$branch\"",
              "patchSetTimestamp": 1532629444000
            },
            {
              "file": "shell/dco",
              "line": 24,
              "reviewer": ids["jeremyphelps"],
              "message": "Done",
              "patchSetTimestamp": 1532629444000
            },
            {
              "file": "shell/dco",
              "line": 27,
              "reviewer": ids["zxiiro"],
              "message": "Indent here because this is a continuation of the git log command.",
              "patchSetTimestamp": 1532629444000
            },
            {
              "file": "shell/dco",
              "line": 27,
              "reviewer": ids["jeremyphelps"],
              "message": "Done",
              "patchSetTimestamp": 1532629444000
            },
            {
              "file": "shell/dco",
              "line": 28,
              "reviewer": ids["zxiiro"],
              "message": "Indent even more here because this is inside the nested while loop.",
              "patchSetTimestamp": 1532629444000
            },
            {
              "file": "shell/dco",
              "line": 28,
              "reviewer": ids["jeremyphelps"],
              "message": "Done",
              "patchSetTimestamp": 1532629444000
            }
          ],
          "sizeInsertions": 92,
          "sizeDeletions": 0
        },
        {
          "number": 19,
          "revision": "06836aa04e6d3f73546d40ed40e638a2033e122e",
          "parents": [
            "890469710d50ce84f3da9bc3f695e576505158de"
          ],
          "ref": "refs/changes/27/11927/19",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532707051000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1532707415000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 99,
          "sizeDeletions": 0
        },
        {
          "number": 20,
          "revision": "84d40aa149cbf7aa7ad2751ef8243d9df1610c95",
          "parents": [
            "890469710d50ce84f3da9bc3f695e576505158de"
          ],
          "ref": "refs/changes/27/11927/20",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532707459000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1532707822000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 96,
          "sizeDeletions": 0
        },
        {
          "number": 21,
          "revision": "4f9ba60b6cce69123d0aeca9a50867656427c616",
          "parents": [
            "890469710d50ce84f3da9bc3f695e576505158de"
          ],
          "ref": "refs/changes/27/11927/21",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532708228000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1532714799000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1532708543000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "lftools/cli/dco.py",
              "line": 28,
              "reviewer": ids["zxiiro"],
              "message": "repo_path\u003d\u0027.\u0027",
              "patchSetTimestamp": 1532708228000
            },
            {
              "file": "lftools/cli/dco.py",
              "line": 28,
              "reviewer": ids["jeremyphelps"],
              "message": "Done",
              "patchSetTimestamp": 1532708228000
            },
            {
              "file": "lftools/cli/dco.py",
              "line": 37,
              "reviewer": ids["zxiiro"],
              "message": "This needs the be the variable repo_path, not the literal string \u0027repo_path\u0027",
              "patchSetTimestamp": 1532708228000
            },
            {
              "file": "lftools/cli/dco.py",
              "line": 37,
              "reviewer": ids["jeremyphelps"],
              "message": "Done",
              "patchSetTimestamp": 1532708228000
            },
            {
              "file": "setup.py",
              "line": 61,
              "reviewer": ids["zxiiro"],
              "message": "Alphabetical order please.",
              "patchSetTimestamp": 1532708228000
            },
            {
              "file": "setup.py",
              "line": 61,
              "reviewer": ids["jeremyphelps"],
              "message": "Done",
              "patchSetTimestamp": 1532708228000
            },
            {
              "file": "shell/dco",
              "line": 17,
              "reviewer": ids["zxiiro"],
              "message": "\"ERROR: Could not cd into $REPO_PATH\"",
              "patchSetTimestamp": 1532708228000
            },
            {
              "file": "shell/dco",
              "line": 17,
              "reviewer": ids["jeremyphelps"],
              "message": "Done",
              "patchSetTimestamp": 1532708228000
            }
          ],
          "sizeInsertions": 96,
          "sizeDeletions": 0
        },
        {
          "number": 22,
          "revision": "07ddb3a403ecc7417e6ccf230763d456c161ad21",
          "parents": [
            "890469710d50ce84f3da9bc3f695e576505158de"
          ],
          "ref": "refs/changes/27/11927/22",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532716000000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1532716313000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 97,
          "sizeDeletions": -1
        },
        {
          "number": 23,
          "revision": "7ddce8c6d16de524081717736cb899a8e9583203",
          "parents": [
            "890469710d50ce84f3da9bc3f695e576505158de"
          ],
          "ref": "refs/changes/27/11927/23",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532716378000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1532716537000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1532716727000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/dco",
              "line": 17,
              "reviewer": ids["zxiiro"],
              "message": "Remove test echo",
              "patchSetTimestamp": 1532716378000
            },
            {
              "file": "shell/dco",
              "line": 18,
              "reviewer": ids["zxiiro"],
              "message": "cd \"$REPO_PATH\" || exit 1\n\nTurns out \"cd\" command itself already prints a message if it fails so we don\u0027t need to also print.",
              "patchSetTimestamp": 1532716378000
            },
            {
              "file": "shell/dco",
              "line": 19,
              "reviewer": ids["zxiiro"],
              "message": "Remove test echos",
              "patchSetTimestamp": 1532716378000
            }
          ],
          "sizeInsertions": 100,
          "sizeDeletions": -1
        },
        {
          "number": 24,
          "revision": "794d871e502545b800ee297e5acd1bea8cd0e38f",
          "parents": [
            "890469710d50ce84f3da9bc3f695e576505158de"
          ],
          "ref": "refs/changes/27/11927/24",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532716790000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1532717145000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "setup.py",
              "line": 60,
              "reviewer": ids["zxiiro"],
              "message": "no need to remove this. Python is perfectly happy with the last element ending with a comma for lists and dictionaries.",
              "patchSetTimestamp": 1532716790000
            }
          ],
          "sizeInsertions": 100,
          "sizeDeletions": -1
        },
        {
          "number": 25,
          "revision": "9aa2fa45eadf2b8cd96ce5c34d4b3daa20ac55cb",
          "parents": [
            "890469710d50ce84f3da9bc3f695e576505158de"
          ],
          "ref": "refs/changes/27/11927/25",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1532717282000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1532717332000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1532797533000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1532717660000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 100,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "v0.24.x",
      "id": "Iccd72e6f1d580037f55bff3199d05d467de17c58",
      "commitNumber": 12589,
      "subject": "Update maven-stage jobs to use lf-infra-pre-build",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12589",
      "commitMessage": "Update maven-stage jobs to use lf-infra-pre-build\n\nUse lf-infra-pre-build to install lftools via --user config. This\nresolves the post-build issues caused by `pip install` due to\nvirtualenvs messing with the environment.\n\nChange-Id: Iccd72e6f1d580037f55bff3199d05d467de17c58\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536882484000,
      "lastUpdatedDate": 1536885080000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["eball"]
      ],
      "comments": [
        {
          "timestamp": 1536882484000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536882642000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/773/"
        },
        {
          "timestamp": 1536882860000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/773/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/773"
        },
        {
          "timestamp": 1536882987000,
          "reviewer": ids["eball"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536882990000,
          "reviewer": ids["eball"],
          "message": "Change has been successfully merged by Eric Ball"
        },
        {
          "timestamp": 1536885080000,
          "reviewer": ids["zxiiro"],
          "message": "Topic set to lftools-venv"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "ac3415e0339d82b1695d0d61534209f46b90375e",
          "parents": [
            "90db9af77b1d31e7c22e6dc181c8b8c6f00b821e"
          ],
          "ref": "refs/changes/89/12589/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536882484000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536882860000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536882987000,
              "grantedBy": ids["eball"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536882990000,
              "grantedBy": ids["eball"]
            }
          ],
          "comments": [],
          "sizeInsertions": 4,
          "sizeDeletions": -9
        }
      ]
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 2,
        "commentCount": 0,
        "approvals": {
          "1": 1,
          "2": 1
        }
      }
    },
    {
      "identity": ids["jeremyphelps"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    }
  ],
  "commentsWritten": [],
  "commentsReceived": [],
  "reviewersForOwnCommits": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
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
  "averageTimeInCodeReview": 0,
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
  "inReviewCommitCount": 1
};
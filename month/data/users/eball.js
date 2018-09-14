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
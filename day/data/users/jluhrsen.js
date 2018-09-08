userdata['jluhrsen'] = {
  "identity": ids["jluhrsen"],
  "reviewCountPlus2": 0,
  "reviewCountPlus1": 0,
  "reviewCountMinus1": 0,
  "reviewCountMinus2": 0,
  "firstActiveDate": 9223372036854775807,
  "lastActiveDate": 0,
  "activeDayCount": 0,
  "commits": [],
  "addedAsReviewerTo": [
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "Ied7ff51a292199675dc944e36f1d821a5a2d045d",
      "commitNumber": 12353,
      "subject": "Add stack create \u0026 delete commands",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12353",
      "commitMessage": "Add stack create \u0026 delete commands\n\nAdd 2 new commands:\n\n    - stack create\n    - stack delete\n\nThese commands allow lftools the ability to create and delete stacks.\n\nIssue: RELENG-235\nChange-Id: Ied7ff51a292199675dc944e36f1d821a5a2d045d\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534892757000,
      "lastUpdatedDate": 1536245697000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["shague"],
        ids["jluhrsen"],
        ids["ecelgp"]
      ],
      "comments": [
        {
          "timestamp": 1534892757000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534899122000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1535070930000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1535071011000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/44/ (1/2)"
        },
        {
          "timestamp": 1535071057000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/247/ (2/2)"
        },
        {
          "timestamp": 1535071242000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/247/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/247/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/247\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/44/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/44"
        },
        {
          "timestamp": 1535071402000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1535071483000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/45/ (1/2)"
        },
        {
          "timestamp": 1535071544000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/248/ (2/2)"
        },
        {
          "timestamp": 1535071737000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-rtd-verify-any/45/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-rtd-verify-any/45\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/248/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/248"
        },
        {
          "timestamp": 1536107417000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4:\n\n@Jamo,Luis,Sam, Just FYI since this affects CSIT jobs."
        },
        {
          "timestamp": 1536245248000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4: Code-Review+1"
        },
        {
          "timestamp": 1536245695000,
          "reviewer": ids["shague"],
          "message": "Patch Set 4: Code-Review+2"
        },
        {
          "timestamp": 1536245697000,
          "reviewer": ids["shague"],
          "message": "Change has been successfully merged by Sam Hague"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "f081ab69eb047d734aa85fe7b6d7df59fbcbabc4",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/53/12353/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534892757000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 68,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "1b2fd8f547dc3d3523aa5e8134c2e33cf440338c",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/53/12353/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534899122000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 168,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "ead2f50016c1bfd67b99fa1dce3807d9d4c26800",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/53/12353/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535070930000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1535071242000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 208,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "0a5942299f83aaa74da3bf1fdf985d4003ce30f3",
          "parents": [
            "c5085bebb6ebdc66a70a28c485ca4f66cffbc339"
          ],
          "ref": "refs/changes/53/12353/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1535071402000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1536245248000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536245695000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536245697000,
              "grantedBy": ids["shague"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1535071737000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 209,
          "sizeDeletions": 0
        }
      ]
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["zxiiro"],
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
  "reviewersForOwnCommits": [],
  "repositories": {},
  "averageTimeInCodeReview": 0,
  "abandonedCommitCount": 0,
  "projects": [],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 0
};
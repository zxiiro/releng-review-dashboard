userdata['bramwelttest'] = {
  "identity": ids["bramwelttest"],
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
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["bramwelt"],
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
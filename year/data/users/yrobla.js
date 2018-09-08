userdata['yrobla'] = {
  "identity": ids["yrobla"],
  "reviewCountPlus2": 0,
  "reviewCountPlus1": 0,
  "reviewCountMinus1": 1,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1526930665000,
  "lastActiveDate": 1527842668000,
  "activeDayCount": 2,
  "commits": [],
  "addedAsReviewerTo": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I942726a626622ee16e5b9a9366f7fe552b144314",
      "commitNumber": 10732,
      "subject": "Add OpenCI event emit job, builder",
      "owner": ids["dfarrell07"],
      "url": "https://gerrit.linuxfoundation.org/infra/10732",
      "commitMessage": "Add OpenCI event emit job, builder\n\nEarly prototype for cross-project, event-driven CI effort under OpenCI,\nbetween ODL, OPNFV and others.\n\nEmit script copied from Fatih in:\n\nhttps://git.opendaylight.org/gerrit/#/c/72096/\n\nChange-Id: I942726a626622ee16e5b9a9366f7fe552b144314\nSigned-off-by: Daniel Farrell \u003cdfarrell@redhat.com\u003e\n",
      "createdOnDate": 1526930665000,
      "lastUpdatedDate": 1527864802000,
      "isOpen": true,
      "status": "NEW",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["fdegir"],
        ids["yrobla"]
      ],
      "comments": [
        {
          "timestamp": 1526930665000,
          "reviewer": ids["dfarrell07"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1526930842000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/449/"
        },
        {
          "timestamp": 1526931046000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/449/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/449"
        },
        {
          "timestamp": 1527842354000,
          "reviewer": ids["fdegir"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1527842668000,
          "reviewer": ids["yrobla"],
          "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1527864802000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-1\n\n(3 comments)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "69fc6ccbb7ac01d21452036ece81b1af121b171e",
          "parents": [
            "9b240453b91f3c4b0844ea1c593721a1c421caa2"
          ],
          "ref": "refs/changes/32/10732/1",
          "uploader": ids["dfarrell07"],
          "createdOnDate": 1526930665000,
          "author": ids["dfarrell07"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1527864802000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1526931046000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1527842668000,
              "grantedBy": ids["yrobla"]
            }
          ],
          "comments": [
            {
              "file": "jjb/openci-jobs.yaml",
              "line": 48,
              "reviewer": ids["zxiiro"],
              "message": "Since global-jjb needs to support GitHub as well we need to also have a GitHub based template. Look at one of the maven verify jobs and copy the GitHub section they all mostly look quite similar.",
              "patchSetTimestamp": 1526930665000
            },
            {
              "file": "shell/openci-emit-ape.sh",
              "line": 1,
              "reviewer": ids["fdegir"],
              "message": "this script does not emit the event but just generates the event body for the prototype.\n\nYolanda has been working on a utility to emit events which can be incorporated into this script.\n\nBtw, we are looking into message spec since we got some info from CNCF guys which we will use while working on the message spec.",
              "patchSetTimestamp": 1526930665000
            },
            {
              "file": "shell/openci-emit-ape.sh",
              "line": 4,
              "reviewer": ids["zxiiro"],
              "message": "2018",
              "patchSetTimestamp": 1526930665000
            },
            {
              "file": "shell/openci-emit-ape.sh",
              "line": 11,
              "reviewer": ids["zxiiro"],
              "message": "We should probably `set -e` too",
              "patchSetTimestamp": 1526930665000
            },
            {
              "file": "shell/openci-emit-ape.sh",
              "line": 26,
              "reviewer": ids["yrobla"],
              "message": "i need that to be quoted, otherwise my code rejects for invalid JSON:\n\n\u0027confidenceLevel\u0027: \"{ $CONFIDENCE_LEVEL }\"",
              "patchSetTimestamp": 1526930665000
            }
          ],
          "sizeInsertions": 125,
          "sizeDeletions": 0
        }
      ]
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["dfarrell07"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 1,
        "commentCount": 1,
        "approvals": {
          "-1": 1
        }
      }
    }
  ],
  "commentsWritten": [
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "I942726a626622ee16e5b9a9366f7fe552b144314",
        "commitNumber": 10732,
        "subject": "Add OpenCI event emit job, builder",
        "owner": ids["dfarrell07"],
        "url": "https://gerrit.linuxfoundation.org/infra/10732",
        "commitMessage": "Add OpenCI event emit job, builder\n\nEarly prototype for cross-project, event-driven CI effort under OpenCI,\nbetween ODL, OPNFV and others.\n\nEmit script copied from Fatih in:\n\nhttps://git.opendaylight.org/gerrit/#/c/72096/\n\nChange-Id: I942726a626622ee16e5b9a9366f7fe552b144314\nSigned-off-by: Daniel Farrell \u003cdfarrell@redhat.com\u003e\n",
        "createdOnDate": 1526930665000,
        "lastUpdatedDate": 1527864802000,
        "isOpen": true,
        "status": "NEW",
        "reviewers": [
          ids["zxiiro"],
          ids["lf-jenkins"],
          ids["fdegir"],
          ids["yrobla"]
        ],
        "comments": [
          {
            "timestamp": 1526930665000,
            "reviewer": ids["dfarrell07"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1526930842000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/449/"
          },
          {
            "timestamp": 1526931046000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/449/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/449"
          },
          {
            "timestamp": 1527842354000,
            "reviewer": ids["fdegir"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1527842668000,
            "reviewer": ids["yrobla"],
            "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1527864802000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1: Code-Review-1\n\n(3 comments)"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "69fc6ccbb7ac01d21452036ece81b1af121b171e",
            "parents": [
              "9b240453b91f3c4b0844ea1c593721a1c421caa2"
            ],
            "ref": "refs/changes/32/10732/1",
            "uploader": ids["dfarrell07"],
            "createdOnDate": 1526930665000,
            "author": ids["dfarrell07"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1527864802000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1526931046000,
                "grantedBy": ids["lf-jenkins"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1527842668000,
                "grantedBy": ids["yrobla"]
              }
            ],
            "comments": [
              {
                "file": "jjb/openci-jobs.yaml",
                "line": 48,
                "reviewer": ids["zxiiro"],
                "message": "Since global-jjb needs to support GitHub as well we need to also have a GitHub based template. Look at one of the maven verify jobs and copy the GitHub section they all mostly look quite similar.",
                "patchSetTimestamp": 1526930665000
              },
              {
                "file": "shell/openci-emit-ape.sh",
                "line": 1,
                "reviewer": ids["fdegir"],
                "message": "this script does not emit the event but just generates the event body for the prototype.\n\nYolanda has been working on a utility to emit events which can be incorporated into this script.\n\nBtw, we are looking into message spec since we got some info from CNCF guys which we will use while working on the message spec.",
                "patchSetTimestamp": 1526930665000
              },
              {
                "file": "shell/openci-emit-ape.sh",
                "line": 4,
                "reviewer": ids["zxiiro"],
                "message": "2018",
                "patchSetTimestamp": 1526930665000
              },
              {
                "file": "shell/openci-emit-ape.sh",
                "line": 11,
                "reviewer": ids["zxiiro"],
                "message": "We should probably `set -e` too",
                "patchSetTimestamp": 1526930665000
              },
              {
                "file": "shell/openci-emit-ape.sh",
                "line": 26,
                "reviewer": ids["yrobla"],
                "message": "i need that to be quoted, otherwise my code rejects for invalid JSON:\n\n\u0027confidenceLevel\u0027: \"{ $CONFIDENCE_LEVEL }\"",
                "patchSetTimestamp": 1526930665000
              }
            ],
            "sizeInsertions": 125,
            "sizeDeletions": 0
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "shell/openci-emit-ape.sh",
          "line": 26,
          "reviewer": ids["yrobla"],
          "message": "i need that to be quoted, otherwise my code rejects for invalid JSON:\n\n\u0027confidenceLevel\u0027: \"{ $CONFIDENCE_LEVEL }\"",
          "patchSetTimestamp": 1526930665000
        }
      ]
    }
  ],
  "commentsReceived": [],
  "reviewersForOwnCommits": [],
  "repositories": {
    "releng/global-jjb": {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [
        {
          "identity": ids["dfarrell07"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 1,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 0
    }
  },
  "averageTimeInCodeReview": 0,
  "abandonedCommitCount": 0,
  "projects": [
    {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [
        {
          "identity": ids["dfarrell07"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 1,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 0
    }
  ],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 0
};
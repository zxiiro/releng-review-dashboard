userdata['askb'] = {
  "identity": ids["askb"],
  "reviewCountPlus2": 1,
  "reviewCountPlus1": 1,
  "reviewCountMinus1": 0,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1536854160000,
  "lastActiveDate": 1536854184000,
  "activeDayCount": 1,
  "commits": [],
  "addedAsReviewerTo": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Idf23a30b111dd922120fb6195d0411e2fc993dab",
      "commitNumber": 12550,
      "subject": "Use clouds.yaml for openstack packer builders",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12550",
      "commitMessage": "Use clouds.yaml for openstack packer builders\n\nSince packer version 1.2.5, packer now supports pulling openstack\nconfig from clouds.yaml. Let\u0027s consolidate to that file so that we\ndon\u0027t have duplicate configuration with the jobs that need the\nopenstack cli.\n\nIssue: RELENG-1205\nChange-Id: Idf23a30b111dd922120fb6195d0411e2fc993dab\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536710958000,
      "lastUpdatedDate": 1536854184000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["agrimberg"],
        ids["jwagantall"],
        ids["askb"]
      ],
      "comments": [
        {
          "timestamp": 1536710958000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536713179000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1536713269000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/320/ (1/2)"
        },
        {
          "timestamp": 1536713332000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/752/ (2/2)"
        },
        {
          "timestamp": 1536713475000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/320/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/320\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/752/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/752"
        },
        {
          "timestamp": 1536714378000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review-1\n\n(1 comment)\n\nReno some release notes please."
        },
        {
          "timestamp": 1536714823000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1536714922000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/321/ (1/2)"
        },
        {
          "timestamp": 1536714980000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/753/ (2/2)"
        },
        {
          "timestamp": 1536715144000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/321/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/321\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/753/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/753"
        },
        {
          "timestamp": 1536719950000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1536719977000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 3:\n\nLeaving it un merged since I would rather prefer a 2nd look from someone else."
        },
        {
          "timestamp": 1536763427000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 3: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1536763606000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\n(1 comment)"
        },
        {
          "timestamp": 1536763702000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1536763814000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/322/ (1/2)"
        },
        {
          "timestamp": 1536763873000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/754/ (2/2)"
        },
        {
          "timestamp": 1536764055000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/322/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/322\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/754/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/754"
        },
        {
          "timestamp": 1536764268000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 4: Code-Review+2"
        },
        {
          "timestamp": 1536854160000,
          "reviewer": ids["askb"],
          "message": "Patch Set 4: Code-Review+2"
        },
        {
          "timestamp": 1536854184000,
          "reviewer": ids["askb"],
          "message": "Change has been successfully merged by Anil Belur"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "fa4b19658c52cc94ac45830a40f6db4ea0673cf3",
          "parents": [
            "b94a82bd078988fbfb58496cb1ac835d48e5ec6e"
          ],
          "ref": "refs/changes/50/12550/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536710958000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [
            {
              "file": "jjb/lf-macros.yaml",
              "line": 87,
              "reviewer": ids["zxiiro"],
              "message": "Downside this is we now require clouds-yaml even for non-openstack packer users.\n\nI wonder if we can somehow make this optional.",
              "patchSetTimestamp": 1536710958000
            }
          ],
          "sizeInsertions": 11,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "d67d30eab6b845113244bd0be9ac85ce4efda8b3",
          "parents": [
            "b94a82bd078988fbfb58496cb1ac835d48e5ec6e"
          ],
          "ref": "refs/changes/50/12550/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536713179000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1536714378000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536713475000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 39,
          "sizeDeletions": -1
        },
        {
          "number": 3,
          "revision": "99edf245eb8f3b25633c3840eecbaa7f3b61e213",
          "parents": [
            "b94a82bd078988fbfb58496cb1ac835d48e5ec6e"
          ],
          "ref": "refs/changes/50/12550/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536714823000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1536763427000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536719950000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536715144000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-macros.yaml",
              "line": 98,
              "reviewer": ids["agrimberg"],
              "message": "Maybe I\u0027m just being silly, but do we know that setting OS_CLOUD to something, when not building an openstack packer (that is openstack \u003d false) isn\u0027t going to cause packer to still try to look in the clouds file?\n\nPerhaps this specific inject should be moved into the conditional-step",
              "patchSetTimestamp": 1536714823000
            },
            {
              "file": "jjb/lf-macros.yaml",
              "line": 98,
              "reviewer": ids["zxiiro"],
              "message": "We can do that just to be safe and not over expose variables.",
              "patchSetTimestamp": 1536714823000
            }
          ],
          "sizeInsertions": 53,
          "sizeDeletions": -1
        },
        {
          "number": 4,
          "revision": "d8e3dc493b1ba8b5a462887c6fa90a51c86bedc2",
          "parents": [
            "b94a82bd078988fbfb58496cb1ac835d48e5ec6e"
          ],
          "ref": "refs/changes/50/12550/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536763702000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536764268000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536854160000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536854184000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536764055000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 54,
          "sizeDeletions": -1
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
  "reviewersForOwnCommits": [],
  "repositories": {},
  "averageTimeInCodeReview": 0,
  "abandonedCommitCount": 0,
  "projects": [],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 0
};
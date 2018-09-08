userdata['dfarrell07'] = {
  "identity": ids["dfarrell07"],
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
      "id": "I2229d66f637bd5aab203a3bbf12aa1e677a471a1",
      "commitNumber": 12122,
      "subject": "Add Jenkins Sandbox Cleanup job",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12122",
      "commitMessage": "Add Jenkins Sandbox Cleanup job\n\nThis cleanup job runs weekly on Saturdays to clear out Sandbox\njobs and views from the system.\n\nThe benefit of this is that it uses the same version of JJB as\nthe other CI jobs whereas the traditional cron job we put in puppet\ndoes not often get updated to match the right version.\n\nIssue: RELENG-1118\nChange-Id: I2229d66f637bd5aab203a3bbf12aa1e677a471a1\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1533414562000,
      "lastUpdatedDate": 1533859346000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["shague"],
        ids["lf-jenkins"],
        ids["dfarrell07"],
        ids["jluhrsen"],
        ids["jeremyphelps"]
      ],
      "comments": [
        {
          "timestamp": 1533414562000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1533414636000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/293/ (1/2)"
        },
        {
          "timestamp": 1533414684000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/687/ (2/2)"
        },
        {
          "timestamp": 1533414875000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/687/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/687/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/687\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/293/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/293"
        },
        {
          "timestamp": 1533570613000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1:\n\nI\u0027m really on the fence with this change. It only solves 1/2 of the configuration problem. That of the Jenkins jobs. It does nothing for the Nexus side for clearing out the job logs that exist in the sandbox holding area which continues to have to be a cron job."
        },
        {
          "timestamp": 1533574810000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n\u003e I\u0027m really on the fence with this change. It only solves 1/2 of the\n \u003e configuration problem. That of the Jenkins jobs. It does nothing\n \u003e for the Nexus side for clearing out the job logs that exist in the\n \u003e sandbox holding area which continues to have to be a cron job.\n\nTo be fair the Nexus side is a completely separate step. Even if we ignore this job. It required modifying 2 separate puppet files. One for Jenkins and one for Nexus. Irrespective of this patch it was still a 2 step process previously too. This reduces the steps to 1 but does bring up a point that we need to document the Nexus part in our infrastructure docs."
        },
        {
          "timestamp": 1533651337000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1533651424000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/294/ (1/2)"
        },
        {
          "timestamp": 1533651444000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/689/ (2/2)"
        },
        {
          "timestamp": 1533651590000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/294/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/294\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/689/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/689"
        },
        {
          "timestamp": 1533851963000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1533859329000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1533859346000,
          "reviewer": ids["jeremyphelps"],
          "message": "Change has been successfully merged by Jeremy Phelps"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "7ca8d2677a2b1c8738d676feaa776240e878dc9c",
          "parents": [
            "78f0bd978eeadea71fdc31e16de4cc4b8e769b48"
          ],
          "ref": "refs/changes/22/12122/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533414562000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1533414875000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 105,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "1eda455b5c9e28a98441ddd46a61035dd5f60fe6",
          "parents": [
            "8a5ed774fd2f4109ff9fe6da4359263dc3a1ab29"
          ],
          "ref": "refs/changes/22/12122/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533651337000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1533851963000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1533859329000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1533859346000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1533651590000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 97,
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
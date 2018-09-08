userdata['jluhrsen'] = {
  "identity": ids["jluhrsen"],
  "reviewCountPlus2": 1,
  "reviewCountPlus1": 0,
  "reviewCountMinus1": 0,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1536166365000,
  "lastActiveDate": 1536166365000,
  "activeDayCount": 1,
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
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I02f0397ae5627f65638a456ba2f1304dd9a16de9",
      "commitNumber": 12461,
      "subject": "Strip out trailing metadata from version",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12461",
      "commitMessage": "Strip out trailing metadata from version\n\nWhen manually building maven plugins maven puts in some metadata\nlike \"2.38-SNAPSHOT (private-9853d407-zxiiro)\" which throws off the\nversion_ge function as it does not know how to handle a version with\na space in the name. This change strips out only the leading version\nignoring everything after a space.\n\nChange-Id: I02f0397ae5627f65638a456ba2f1304dd9a16de9\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1536166054000,
      "lastUpdatedDate": 1536166606000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["jluhrsen"]
      ],
      "comments": [
        {
          "timestamp": 1536166054000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1536166365000,
          "reviewer": ids["jluhrsen"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1536166425000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/742/"
        },
        {
          "timestamp": 1536166598000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/742/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/742"
        },
        {
          "timestamp": 1536166606000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha (zxiiro)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "8bab321b9a1713ac4c2b4bf6814dd4fc4b9f27f4",
          "parents": [
            "73c1e4ad26a06e40fee8e08aad09ed3831b4cdf6"
          ],
          "ref": "refs/changes/61/12461/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1536166054000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1536166606000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1536166598000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1536166365000,
              "grantedBy": ids["jluhrsen"]
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
        "addedAsReviewerCount": 3,
        "approvalCount": 1,
        "commentCount": 0,
        "approvals": {
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